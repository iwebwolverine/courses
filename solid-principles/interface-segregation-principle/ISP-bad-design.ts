class TextDocument {}
interface Printer {
  print(document: TextDocument): void;
  scan(document: TextDocument): void;
  fax(document: TextDocument): void;
}

class ModernPrinter implements Printer {
  print(document: TextDocument): void {
    console.log(`Printing document: ${document}`);
  }

  scan(document: TextDocument): void {
    console.log(`Scanning document: ${document}`);
  }

  fax(document: TextDocument): void {
    console.log(`Faxing document: ${document}`);
  }
}

class OldPrinter implements Printer {
  print(document: TextDocument): void {
    console.log(`Printing document: ${document}`);
  }

  // Old printers might not support these functionalities
  scan(document: TextDocument): void {
    throw new Error("Function not supported.");
  }

  fax(document: TextDocument): void {
    throw new Error("Function not supported.");
  }
}
