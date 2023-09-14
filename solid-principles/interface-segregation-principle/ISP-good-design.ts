class TextDocument {}

interface IPrinter {
  print(document: TextDocument): void;
}

interface IScanner {
  scan(document: TextDocument): void;
}

interface IFaxMachine {
  fax(document: TextDocument): void;
}

class MultifunctionalPrinter implements IPrinter, IScanner, IFaxMachine {
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

class OldPrinter implements IPrinter {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }
}
