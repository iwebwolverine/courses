interface ICommand {
    execute(): void;
    undo(): void;
}

class TextEditor {
    text: string = "";
}

class WriteTextCommand implements ICommand {
    private readonly editor: TextEditor;
    private readonly previousText: string;
    private readonly textToAdd: string;

    constructor(editor: TextEditor, textToAdd: string) {
        this.editor = editor;
        this.previousText = editor.text;
        this.textToAdd = textToAdd;
    }

    execute(): void {
        this.editor.text += this.textToAdd;
    }

    undo(): void {
        this.editor.text = this.previousText;
    }
}

class EditorInvoker {
    private history: ICommand[] = [];
    private pointer: number = -1;

    invoke(command: ICommand): void {
        if (this.pointer < this.history.length - 1) {
            this.history = this.history.slice(0, this.pointer + 1);
        }

        command.execute();
        this.history.push(command);
        this.pointer++;
    }

    undo(): void {
        if (this.pointer >= 0) {
            const command = this.history[this.pointer];
            command.undo();
            this.pointer--;
        }
    }

    redo(): void {
        if (this.pointer < this.history.length - 1) {
            this.pointer++;
            const command = this.history[this.pointer];
            command.execute();
        }
    }
}