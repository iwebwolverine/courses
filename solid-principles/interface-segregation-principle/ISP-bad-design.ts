interface Printer {
  print(document: string): void;
  scan(document: string): void;
  fax(document: string): void;
}

class ModernPrinter implements Printer {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }

  scan(document: string): void {
    console.log(`Scanning document: ${document}`);
  }

  fax(document: string): void {
    console.log(`Faxing document: ${document}`);
  }
}

class OldPrinter implements Printer {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }

  // Old printers might not support these functionalities
  scan(document: string): void {
    throw new Error("Function not supported.");
  }

  fax(document: string): void {
    throw new Error("Function not supported.");
  }
}
