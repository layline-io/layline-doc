/**
 * This file contains a custom TypeDoc plugin that modifies the generated markdown documentation.
 * The plugin removes the "Class:" prefix from markdown headers in TypeDoc-generated documentation.
 * It achieves this by hooking into the theme setup and modifying the class template.
 * The plugin is designed to work with the docusaurus-plugin-typedoc plugin in a Docusaurus project.
 */


const { RendererEvent } = require("typedoc");

/**
 * A custom TypeDoc plugin that modifies the generated markdown.
 * This plugin removes the "Class:" prefix from markdown headers in TypeDoc-generated documentation.
 */
function load(app) {
  // console.log('TypeDoc plugin loaded');
  
  // Hook into the theme setup
  app.renderer.on(RendererEvent.BEGIN, () => {
    // console.log('BEGIN event fired - setting up theme modifications');
    
    // Get the theme instance
    const theme = app.renderer.theme;
    if (!theme) {
      // console.log('Theme not available');
      return;
    }
    
    // console.log('Theme found:', theme.constructor.name);
    
    // Try to modify the theme's class template
    if (theme.resources && theme.resources.templates) {
      // Look for the class template
      const templates = Object.keys(theme.resources.templates);
      // console.log('Available templates:', templates.join(', '));
      
      // Try to modify the class template if it exists
      if (theme.resources.templates.class) {
        const originalTemplate = theme.resources.templates.class;
        theme.resources.templates.class = (model, options) => {
          // console.log('Class template intercepted for:', model.name);
          let output = originalTemplate(model, options);
          
          // Replace "Class: ClassName", "Enumeration: EnumName", etc. with just the name in headers
          output = output.replace(/^# (Class|Enumeration|Interface|Variable): (.+)$/gm, '# $2');
          
          return output;
        };
        // console.log('Successfully modified class template');
      }
    }
    
    // Alternative approach: modify the Handlebars templates directly
    if (app.renderer.templateMapping) {
      // console.log('Template mapping found');
      const originalTemplateMapping = app.renderer.templateMapping;
      
      // Override the template mapping function
      app.renderer.templateMapping = function(template, model) {
        // console.log('Template mapping called for:', template);
        let result = originalTemplateMapping.call(this, template, model);
        
        // Post-process the result if it's a class template
        if (template === 'class' || template === 'reflection.hbs') {
          // console.log('Post-processing class template result');
          result = result.replace(/^# (Class|Enumeration|Interface|Variable): (.+)$/gm, '# $2');
        }
        
        return result;
      };
      // console.log('Successfully modified template mapping');
    }
  });
  
  // Last resort: try to modify the output files after they're written
  app.renderer.on(RendererEvent.END, () => {
    // console.log('END event fired - attempting post-processing');
    
    // Use Node.js fs module to read and modify the files
    const fs = require('fs');
    const path = require('path');
    
    // Function to process a directory recursively
    function processDirectory(directory) {
      // console.log('Processing directory:', directory);
      try {
        const files = fs.readdirSync(directory);
        
        for (const file of files) {
          const filePath = path.join(directory, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            processDirectory(filePath);
          } else if (file.endsWith('.md')) {
            // console.log('Processing markdown file:', filePath);
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Replace "Class: ClassName", "Enumeration: EnumName", etc. with just the name in headers
            const newContent = content.replace(/^# (Class|Enumeration|Interface|Variable): (.+)$/gm, '# $2');
            
            if (content !== newContent) {
              // console.log('Updating file with modified content:', filePath);
              fs.writeFileSync(filePath, newContent, 'utf8');
            }
          }
        }
      } catch (error) {
        // console.error('Error processing directory:', error);
      }
    }
    
    // Process the output directories
    if (app.options && app.options.getValue('out')) {
      const outDir = app.options.getValue('out');
      // console.log('Processing output directory:', outDir);
      processDirectory(outDir);
    }
  });
}

module.exports = { load };