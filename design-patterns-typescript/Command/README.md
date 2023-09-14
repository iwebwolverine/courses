# Command Pattern

> The **Command Pattern** is a behavioral design pattern that turns a request into a stand-alone object containing information about the request, such as the method name, the object that owns the method, and the method's parameters. This decoupling allows you to decouple classes that invoke operations from classes that perform the operation, making the code more modular and easier to expand.

### Usage

- **Command:** This declares an interface for executing an operation.

- **ConcreteCommand (WriteTextCommand):** This class defines a binding between a receiver object and an action. It implements the Command interface, specifying which receiver will handle the action.

- **Client:** This class creates a ConcreteCommand object and sets its receiver. In our example, the Client is actually represented in the final segment, where we're orchestrating the actions

- **Invoker (EditorInvoker):** This class asks the command to carry out the request.

- **Receiver (TextEditor):** This class knows how to perform the operation associated with carrying out the request.

```typescript
const editor = new TextEditor();
const invoker = new EditorInvoker();

const writeHelloCommand = new WriteTextCommand(editor, "Hello");
const writeWorldCommand = new WriteTextCommand(editor, " World!");

invoker.invoke(writeHelloCommand);
invoker.invoke(writeWorldCommand);

console.log(editor.text); // "Hello World!"

invoker.undo();
console.log(editor.text); // "Hello"

invoker.redo();
console.log(editor.text); // "Hello World!"
```
