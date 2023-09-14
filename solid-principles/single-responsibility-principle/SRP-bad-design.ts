import fs from 'fs';

class LogsJournal {
    _entries: Array<string>;
    _count: number;

  constructor() {
    this._entries = [];
    this._count = 0;
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
    return Object.values(this._entries).join('\n');
  }

  save(filename: string)
  {
    fs.writeFileSync(filename, this.toString());
  }

  formatMessage(message: string) {
    return `Formatted message: ${message}`;
  }
}

const logsJournal = new LogsJournal();

logsJournal.addMessage('First log');

