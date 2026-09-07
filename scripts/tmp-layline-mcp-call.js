const { spawn } = require('child_process');

const server = spawn('node', ['services/layline-mcp/dist/server.js'], {
  cwd: '/Users/andrew/Documents/Work/layline/Dev/layline-server/layline-ai-prototype',
  stdio: ['pipe', 'pipe', 'pipe']
});

let buffer = Buffer.alloc(0);
const pending = new Map();
let nextId = 1;

function send(msg) {
  const json = Buffer.from(JSON.stringify(msg), 'utf8');
  const header = Buffer.from(`Content-Length: ${json.length}\r\n\r\n`, 'utf8');
  server.stdin.write(Buffer.concat([header, json]));
}

function request(method, params, timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    const id = nextId++;
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`Timeout waiting for ${method}`));
    }, timeoutMs);

    pending.set(id, {
      resolve: (result) => {
        clearTimeout(timer);
        resolve(result);
      },
      reject: (err) => {
        clearTimeout(timer);
        reject(err);
      }
    });

    send({ jsonrpc: '2.0', id, method, params });
  });
}

function parseFrames() {
  while (true) {
    const headerEnd = buffer.indexOf('\r\n\r\n');
    if (headerEnd === -1) return;

    const headerText = buffer.slice(0, headerEnd).toString('utf8');
    const m = headerText.match(/Content-Length:\s*(\d+)/i);
    if (!m) {
      console.error('Missing Content-Length header');
      process.exit(1);
    }

    const len = Number(m[1]);
    const total = headerEnd + 4 + len;
    if (buffer.length < total) return;

    const body = buffer.slice(headerEnd + 4, total).toString('utf8');
    buffer = buffer.slice(total);

    let msg;
    try {
      msg = JSON.parse(body);
    } catch (e) {
      console.error('Invalid JSON from server:', body);
      process.exit(1);
    }

    if (msg.id != null && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(JSON.stringify(msg.error)));
      else resolve(msg.result);
    }
  }
}

server.stdout.on('data', (chunk) => {
  buffer = Buffer.concat([buffer, chunk]);
  parseFrames();
});

server.stderr.on('data', () => {
  // Ignore logs from MCP server stderr.
});

(async () => {
  try {
    await request('initialize', {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'copilot-cli', version: '1.0.0' }
    }, 15000);

    send({ jsonrpc: '2.0', method: 'notifications/initialized', params: {} });

    await request('tools/list', {}, 15000);

    const result = await request('tools/call', {
      name: 'layline_list_asset_types',
      arguments: {}
    }, 30000);

    let entries = [];
    if (Array.isArray(result?.structuredContent)) {
      entries = result.structuredContent;
    } else if (Array.isArray(result?.structuredContent?.entries)) {
      entries = result.structuredContent.entries;
    } else if (Array.isArray(result?.content)) {
      const textPart = result.content.find((c) => c.type === 'text' && typeof c.text === 'string');
      if (textPart) {
        try {
          const parsed = JSON.parse(textPart.text);
          if (Array.isArray(parsed)) entries = parsed;
          else if (Array.isArray(parsed?.entries)) entries = parsed.entries;
        } catch {
          // Leave entries empty if tool returns non-JSON text.
        }
      }
    }

    console.log(JSON.stringify({ entryCount: entries.length }));
    server.kill('SIGTERM');
  } catch (err) {
    console.error('MCP call failed:', err.message);
    server.kill('SIGTERM');
    process.exit(1);
  }
})();
