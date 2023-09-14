## I - Interface segregation principle (ISP)

> The Interface Segregation Principle (ISP) asserts that a client should not be forced to implement interfaces it doesn't use. Instead of one monolithic interface, it's preferable to have multiple, specific interfaces tailored to the client's needs.

### Bad Approach

In this approach, there's a single, large interface forcing implementations to have methods that might not be relevant to them.

```typescript
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
```

### Good Approach

Instead of a single, large interface, we split it into separate interfaces. This allows devices to implement only the functionalities they support.

**The advantage of the good approach is:**

- **Flexibility:** Devices can implement only the interfaces they need.

- **Clear Contracts:** By looking at the interfaces a class implements, it's clear what functionalities it supports.

- **Avoids Unnecessary Errors:** In the bad approach, using an OldPrinter to scan or fax would throw errors. With the good approach, the OldPrinter simply doesn't offer these methods.

```typescript
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
```
