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
