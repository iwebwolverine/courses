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
