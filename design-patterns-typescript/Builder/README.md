### Builder

The Builder Pattern is a creational design pattern used to construct a complex object step by step. This pattern separates the construction of a complex object from its representation, allowing the same construction process to produce different representations. The pattern is particularly useful when an object needs to be created with many optional configurations or components.

## Why Use the Builder Pattern?

- When an object has too many components or configurations, initializing everything using constructors can become messy and confusing. The builder pattern offers a clear and step-by-step approach.
- It allows for a variable number of configurations without having to define numerous constructors.
- It's helpful when you need to ensure a specific sequence of operations to create an object.
- Provides an abstraction allowing you to hide the internal structure and construction process of complex objects from the client.

## Examples

```typescript
const pdfBuilder = new PDFDocumentBuilder();

const document = pdfBuilder
  .setHeader("Document Title")
  .addParagraph("Introduction to the document...")
  .addTable({ rows: 10, columns: 5 })
  .setFooter("Page 1 of 1")
  .build();

const writer = new PDFWriter({ folder: "/path/to/output" });

writer.write(document, "BuilderExample");
```

```javascript
const codeBuilder = new CodeBuilder("User");

const code = pdfBuilder.addField("name").addField("age").build();

console.log(code);
```
