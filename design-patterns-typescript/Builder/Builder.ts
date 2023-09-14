class PDFDocument {
    header?: string;
    paragraphs: string[] = [];
    tables: any[] = []; // Simplified representation; real tables would be more complex
    footer?: string;
}

interface IDocumentBuilder {
    setHeader(header: string): this;
    addParagraph(paragraph: string): this;
    addTable(table: any): this;
    setFooter(footer: string): this;
    build(): PDFDocument;
}

class PDFDocumentBuilder implements IDocumentBuilder {
    private document: PDFDocument;

    constructor() {
        this.document = new PDFDocument();
    }

    setHeader(header: string): this {
        this.document.header = header;
        return this;
    }

    addParagraph(paragraph: string): this {
        this.document.paragraphs.push(paragraph);
        return this;
    }

    addTable(table: any): this {
        this.document.tables.push(table);
        return this;
    }

    setFooter(footer: string): this {
        this.document.footer = footer;
        return this;
    }

    build(): PDFDocument {
        return this.document;
    }
}

class PDFWriter {
    private folder: string;

    constructor(config: { folder: string }) {
        this.folder = config.folder;
    }

    write(document: PDFDocument, filename: string): void {
        console.log(`Document saved as ${this.folder}/${filename}.pdf`);
    }
}

const pdfBuilder = new PDFDocumentBuilder();
const myDocument = pdfBuilder
    .setHeader("Document Title")
    .addParagraph("Introduction to the document...")
    .addTable({ rows: 10, columns: 5 })
    .setFooter("Page 1 of 1")
    .build();

const writer = new PDFWriter({ folder: '/path/to/output' });
writer.write(myDocument, "MyFile");