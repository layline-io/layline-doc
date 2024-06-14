---
id: "Stream"
title: "Class: Stream"
sidebar_label: "Stream"
sidebar_position: 0
custom_edit_url: null
---

`stream` represents the stream which is being processed at the time.
It does not require instantiation and is available for access in any script-based Processor, e.g. the Javascript Processor.
It provides a number of functions which can - and sometimes have to - be invoked to control stream processing.

## Methods

### emit

▸ **emit**(`message`, `outputPort`): `void`

Emit a message to the specified output port.
Once emitted, the context of the message is lost.
If you need to emit a message to another output port, you need to clone the original message,
first, and then emit the clone to that other output port.

**`Since`**

1.0.0

Example:
```js
OUTPUT_PORT = processor.getOutputPort('Output');
stream.emit(message, OUTPUT_PORT);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Message.md) |
| `outputPort` | [`OutputPort`](OutputPort.md) |

#### Returns

`void`

void

___

### getId

▸ **getId**(): `string`

Each Stream in layline.io has an ID which uniquely identifies a stream.
Use this method to retrieve this unique ID.

#### Returns

`string`

Unique Stream ID

Example:
```js
const STREAM_ID = stream.getId();
```

___

### getMetadata

▸ **getMetadata**(): [`Message`](Message.md)

Retrieves metadata information from a stream.
Returns the information in form of a [Message](Message.md).
Depending on the type of stream, the message contains differing information.
For example a file-based stream will return other data than a Kafka stream.

#### Returns

[`Message`](Message.md)

- Returns a message which contains the stream-type specific data.

**Stream-type specific message return content:**

**File Stream:**

|Property|Type|Description|
|---|---|---|
| **Path** | System.String | Directory path from which the file was read |
| **Size** | System.Long | File size in bytes |
| **LastModified** | System.DateTime | Last modified date and time |

**FTP Stream:**

| Property | Type | Description |
| --- | --- | --- |
| **Path** | System.String | Directory path from which the file was read |
| **Size** | System.Long | File size in bytes |
| **LastModified** | System.DateTime | Last modified date and time |

**HTTP Stream:**

| Property | Type | Description |
| --- | --- | --- |
| **BindAddress** | System.String | IP-Address |
| **BindPort** | System.Integer | IP-Port number |

**Kafka (Exclusive Partition Stream):**

| Property | Type | Description |
| --- | --- | --- |
| **GroupId** | System.String | Consumer group id |
| **Topics** | System.String[] | Array of topics |

**Kafka (Standard Stream):**

| Property | Type | Description |
| --- | --- | --- |
| **GroupId** | System.String | Consumer group id |
| **Topic** | System.String | Topic name of the exclusive partition |
| **Partition** | System.Integer | Partition number |

**AWS S3 Service Source Stream:**

| Property | Type | Description |
| --- | --- | --- |
| **Path** | System.String | S3 path |
| **Size** | System.Long | S3 object size |
| **StorageClass** | System.String | S3 storage class |
| **LastModified** | System.DateTime | Last modified date and time |

**AWS SQS Source Stream:**

| Property | Type | Description |
| --- | --- | --- |
| **QueueUrl** | System.String | |

**Serial Source Stream:**

| Property | Type | Description |
| --- | --- | --- |
| **Port** | System.String | Port name |
| **BaudRate** | System.Integer | Baud rate |
| **DataBits** | System.Integer |  |
| **StopBits** | System.String |  |
| **Parity** | System.String |  |
| **FlowControl** | System.String |  |

**Secondary Stream:**

| Property | Type | Description |
| --- | --- | --- |
| **ParentStreamName** | System.String | Name of the originating stream (parent) |
| **ParentStreamId** | System.String | Id of the originating stream (parent) |

**Service Source Stream:**

| Property | Type | Description |
| --- | --- | --- |
| **Service** | System.String | Service name |

**TCP Source Stream:**

| Property | Type | Description |
| --- | --- | --- |
| **LocalAddress** | System.String | |
| **LocalPort** | System.Integer | |
| **RemoteAddress** | System.String | |
| **RemotePort** | System.Integer | |

Example:
```js
// Get the metadata for the stream (a Kafka stream in our example):
const msgMetadata = stream.getMetadata();
// Result:
// msgMetadata.data = {
//   GroupId: "MyConsumerGroup",
//   Topic: "mytopic",
//   Partition: "0"
// }
}
```

___

### getName

▸ **getName**(): `string`

Returns the name of a stream.

For file bases processing the stream name is the name of the file being processed.
For other sources, the stream name is usually explicitly set by you in the respective Source Asset.

For example if your data stems from a Service Source Asset, then the stream name is defined in the configuration of that Asset like so:
`${msg:IoT.StreamName}-${date:yyyy-MM-dd-HH-mm-ss}` which will result in `DeviceX-2022-10-10-21-45-33`.

Use this method to retrieve this unique ID.

Example:
```js
const STREAM_NAME = stream.getName();
```

#### Returns

`string`

Stream name

___

### logError

▸ **logError**(`msg`): `void`

Logs a message with [Severity](../enums/Severity.md).ERROR to the stream log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

Example:
```js
stream.logError('Ran into the following problem: ' + problem);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `string` | Information you want to log. |

#### Returns

`void`

___

### logFatal

▸ **logFatal**(`msg`): `void`

Logs a message with [Severity](../enums/Severity.md).FATAL to the stream log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

Example:
```js
stream.logFatal('Ran into the following problem: ' + problem);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `string` | Information you want to log. |

#### Returns

`void`

___

### logInfo

▸ **logInfo**(`msg`): `void`

Logs a message with [Severity](../enums/Severity.md).INFO to the stream log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

Example:
```js
stream.logInfo('Here is some interesting information: ' + info);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `string` | Information you want to log. |

#### Returns

`void`

___

### logWarning

▸ **logWarning**(`msg`): `void`

Logs a message with [Severity](../enums/Severity.md).WARNING to the stream log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

Example:
```js
stream.logWarning('Here is a warning: ' + warning);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `string` | Information you want to log. |

#### Returns

`void`

___

### requestRetry

▸ **requestRetry**(`reason`, `ms?`): `void`

In case you encounter an error in a stream and have caught it, then you can request for the stream to be retried after a defined number of milliseconds.

Example:
```js
// Request retry after 30 seconds
stream.requestRetry(Status.create(VENDOR, 'DB_NOT_AVAILABLE'), 30000);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason` | [`Status`](Status.md) | Status which should be attached to the retry signal. The Status should describe the reason for the retry. |
| `ms?` | `number` | Retry timeout in milliseconds. Default is 60 seconds. |

#### Returns

`void`

___

### requestRollback

▸ **requestRollback**(`status`): `void`

Requests to roll back the currently processed stream.

To roll back a stream, you may issue a [requestRollback](Stream.md#requestrollback-2) to signal to layline.io that you want this stream rolled back and provide a [Status](Status.md) which describes the reason for the rollback.

Example:
```js
// Request a rollback and add a status which (example) adds a Status of your type 'SEQ_NUMBER_UNKNOWN' and adds the file name
...
let fileInfo = {
    sequence: message.data.IOT.SEQ_NO;
}
...
stream.requestRollback(Status.create(VENDOR, 'SEQ_NUMBER_UNKNOWN', fileInfo.sequence));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`Status`](Status.md) | Status which should be attached to the rollback signal. The Status should describe the reason for the rollback. |

#### Returns

`void`

___

### setDoneName

▸ **setDoneName**(`name`): `internal`

Set the name of a stream that is sent to the done path.
In case your output is a file, this would then be the file's name.

```js
// Set stream done name:
stream.setDoneName('New-Done-Stream-Name');

// Functions which return a Stream can be chained like this:
stream.setDoneName('New-Stream-Name').setDonePath('/my/specific/path')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | New stream name |

#### Returns

`internal`

Stream: The manipulated stream.

___

### setDonePath

▸ **setDonePath**(`path`): `internal`

Set the done path of a stream that is sent to the done path.
In case your data is written to a file, this would then be the path to which the file is written.

```js
// Set stream done path:
stream.setDonePath('New-Done-Stream-Path');

// Functions which return a Stream can be chained like this:
stream.setDoneName('New-Stream-Name').setDonePath('/my/specific/path')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | New path name |

#### Returns

`internal`

Stream: The manipulated stream.

___

### setErrorName

▸ **setErrorName**(`name`): `internal`

Set the name of a stream that is sent to the error path.
In case your output is a file, this would then be the file's name.

```js
// Set stream error name:
stream.setErrorName('New-Error-Stream-Name');

// Functions which return a Stream can be chained like this:
stream.setErrorName('New-Stream-Name').setErrorPath('/my/specific/path')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | New stream name |

#### Returns

`internal`

Stream: The manipulated stream.

___

### setErrorPath

▸ **setErrorPath**(`path`): `internal`

Set the error path of a stream that is sent to the done path.
In case your data is written to a file, this would then be the path to which the file is written.

```js
// Set stream error path:
stream.setErrorPath('New-Error-Stream-Path');

// Functions which return a Stream can be chained like this:
stream.setErrorName('New-Stream-Name').setErrorPath('/my/specific/path')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | New path name |

#### Returns

`internal`

Stream: The manipulated stream.

___

### setOutputName

▸ **setOutputName**(`name`): `internal`

Set the name of a stream that is sent to the output path.
In case your output is a file, this would then be the file's name.

```js
// Set stream output name:
stream.setOutputName('New-Output-Stream-Name');

// Functions which return a Stream can be chained like this:
stream.setOutputName('New-Stream-Name').setOutputPath('/my/specific/path')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | New stream name |

#### Returns

`internal`

Stream: The manipulated stream.

___

### setOutputPath

▸ **setOutputPath**(`path`): `internal`

Set the output path of a stream that is sent to the normal output channel.
In case your data is written to a file, this would then be the path to which the file is written.

```js
// Set stream output path:
stream.setOutputPath('New-Output-Stream-Path');

// Functions which return a Stream can be chained like this:
stream.setOutputName('New-Stream-Name').setOutputPath('/my/specific/path')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | New path name |

#### Returns

`internal`

Stream: The manipulated stream.

___

### setProcessorOutputName

▸ **setProcessorOutputName**(`outputProcessorName`, `streamName`): `internal`

Set the name of the output stream for a specific Processor.
Use this for example, if you have a processor with multiple output ports,
and need to send messages to either of these ports, but also determine
what the name of the streams should be on either of these ports.

This is used to change the name of the output stream.
E.g. if a file is written, this will be the filename in output.

```js
Option 1:
// Set stream output names:
stream.setProcessorOutputName('NameOfOutputProcessor', 'MyNewStreamName');

// or Option 2:
const OUTPUT_PORT = getOutputPort('NameOfOutputPort');
stream.setProcessorOutputName(OUTPUT_PORT.getPeerProcessorName(), 'MyNewStreamName');
// Options 2 only works if the processor connected to OUTPUT_PORT is the actual Output-Processor.

// Functions which return a Stream can be chained like this:
stream.setProcessorOutputName('New-Stream-Name').setProcessorOutputPath('/my/specific/path')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputProcessorName` | `string` | Name of the output processor at the end of the workflow. |
| `streamName` | `string` | New name the stream should have when data is sent out to the receiving processor. |

#### Returns

`internal`

___

### setProcessorOutputPath

▸ **setProcessorOutputPath**(`outputProcessorName`, `path`): `internal`

Set the path of the output stream for a specific Processor.
Use this for example, if you have a processor with multiple output ports,
and need to send messages to either of these ports, but also determine
what the path of the streams should be on either of these ports.

This is used to change the path of the output stream.
E.g. if a file is written, this will be written to the specified path.

```js
Option 1:
// Set stream path name:
stream.setProcessorPathName('NameOfOutputProcessor', '/my/specific/output/path');

// or Option 2:
const OUTPUT_PORT = getOutputPort('NameOfOutputPort');
stream.setProcessorOutputName(OUTPUT_PORT.getPeerProcessorName(), '/my/specific/output/path');
// Options 2 only works if the processor connected to OUTPUT_PORT is the actual Output-Processor.

// Functions which return a Stream can be chained like this:
stream.setProcessorOutputName('New-Stream-Name').setProcessorOutputPath('/my/specific/path')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputProcessorName` | `string` | Name of the output processor at the end of the workflow. |
| `path` | `string` | New name the stream should have when data is sent out to the receiving processor. |

#### Returns

`internal`
