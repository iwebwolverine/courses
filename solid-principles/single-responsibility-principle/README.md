## S - Single Responsibility Principle (SRP)

> - Every class, module, or function in a program should have one responsibility/purpose in a program
> - This principle asserts that a class or module should do only one job. If a class has more than one responsibility, it becomes coupled, making changes in one responsibility potentially affect the other. By keeping each class to a single responsibility, the software becomes more modular and changes are isolated, reducing the risk of unintended consequences.

### Bad Approach

The class `LogsJournal` is responsible for both managing the logs and saving them to a file. Ideally, these two responsibilities should be separated. For instance, the persistence logic (saving logs to a file) can be moved to a separate class or module.

```typescript
import fs from "fs";

class LogsJournal {
  private _entries: Array<string>;

  constructor() {
    this._entries = [];
  }

  addMessage(message: string): number {
    const entry = `${new Date().toString()}: ${message}`;
    this._entries.push(entry);

    return this._entries.length;
  }

  removeRecord(index: number) {
    this._entries.splice(index, 1);
  }

  toString() {
    return Object.values(this._entries).join("\n");
  }

  saveToFileSystem(filename: string) {
    fs.writeFileSync(filename, this.toString());
  }

  formatMessage(message: string) {
    return `Formatted message: ${message}`;
  }
}

const logsJournal = new LogsJournal();

logsJournal.addMessage("First log");
logsJournal.save("/path");
```

### Good Approach

**The advantage of the good approach is:**

- **Maintainability:** Changes to one responsibility (or feature) will be isolated to a single class, reducing the risk of unintentionally affecting other parts of your application.
- **Comprehensibility:** It's easier for developers to understand and reason about classes that have a clear and single purpose.
- **Testability:** When classes have a single concern, they're typically easier to unit test.

```typescript
class LogMessage {
  private _message: string;
  private _createdAt: Date;

  constructor(message: string) {
    this._message = message;
    this._createdAt = new Date();
  }

  get message() {
    return this._message;
  }
  get createdAt() {
    return this._createdAt;
  }
}

class LogsJournal {
  private _messages: Array<LogMessage> = [];

  addMessage(message: string): LogsJournal {
    this._messages.push(new LogMessage(message));

    return this;
  }

  getMessages(): Array<LogMessage> {
    return this._messages;
  }
}

class JournalConsoleWriter {
  write(
    logsJournal: LogsJournal,
    { formatter }: { formatter: (journal: LogMessage) => void }
  ) {
    for (const logMessage of logsJournal.getMessages()) {
      const message = formatter ? formatter(logMessage) : logMessage.message;

      console.log(message);
    }
  }
}

const journalFormatter = (log: LogMessage) =>
  `Message: ${log.message} \nDate: ${log.createdAt} \n`;

const logsJournal = new LogsJournal();

logsJournal
  .addMessage("My first log")
  .addMessage("My second log")
  .addMessage("My third log");

const writer = new JournalConsoleWriter();

writer.write(logsJournal, { formatter: journalFormatter });
```
