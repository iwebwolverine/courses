const SPACE = " ";

class CodeBuilder {
  _className: string;
  _classFields: string[];

  constructor(className: string) {
    this._className = className;
    this._classFields = [];
  }

  addField(name: string) {
    this._classFields.push(name);
    return this;
  }

  build() {
    const lines: string[] = [];

    lines.push(`class ${this._className} {`);

    if (this._classFields.length) {
      lines.push(
        `${SPACE.repeat(2)}constructor(${this._classFields.join(", ")}) {`
      );

      for (let index = 0; index < this._classFields.length; index++) {
        const field = this._classFields[index];

        lines.push(`${SPACE.repeat(4)}this.${field} = ${field};`);
      }

      lines.push(`${SPACE.repeat(2)}}`);
    }

    lines.push("}");

    return lines.join("\n");
  }
}
