[//]: # (Precede this section with the header "### Asset Dependency")

Use this section to add Formats which you plan to use as part of your filtering and routing rules.

**Why do I have to add formats here?**  
Doesn't the system know which Formats I am using?
layline.io automatically understands when you are using Formats as part of your input and output processors and automatically mounts them at runtime.
But when you are referencing Formats which are not used as part of an input or output Processor directly, but rather referenced in
a [Javascript Flow Processor](/docs/assets/processors-flow/asset-flow-javascript) or [Quickscript](/docs/category/quickscript), then the system may not be aware that you are using this format within
any of those scripts.
This would result in a runtime error.

To avoid this, you can explicitly mention the Formats you are referencing in your scripts.
This ensures, that these Formats will always be mounted at runtime.
So it is best practice to add Formats which are referenced in this Asset here.

![Asset Dependency](._asset-dependency_images/56e288c3.png)

To add formats click on `Add Dependency` and select the Format you wish to add as a dependency.
Repeat for any other Format dependency.
