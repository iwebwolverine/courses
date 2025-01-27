### Composite

The Composition Pattern is a design principle that focuses on building complex objects by combining simpler, reusable components. This contrasts with traditional inheritance, where objects inherit behavior from a parent class. In composition, behavior is added to an object at runtime or via delegation, making it more flexible and easier to manage.

## When to Use Composition?

- When you need multiple combinations of behavior.
- When inheritance would lead to a large number of classes.
- When you want to avoid tight coupling between components.

## Examples

### Back-end example

```typescript
type Middleware = (context: any, next: () => void) => void;

const loggerMiddleware: Middleware = (context, next) => {
  console.log(`Request to: ${context.url}`);
  next();
};

const authMiddleware: Middleware = (context, next) => {
  if (!context.isAuthenticated) {
    console.log("Authentication required!");
  } else {
    next();
  }
};

const responseMiddleware: Middleware = (context, next) => {
  next();
  console.log(`Response sent: ${context.response}`);
};

class MiddlewareManager {
  private middlewares: Middleware[] = [];

  use(middleware: Middleware) {
    this.middlewares.push(middleware);
  }

  run(context: any) {
    const execute = (index: number) => {
      if (index < this.middlewares.length) {
        this.middlewares[index](context, () => execute(index + 1));
      }
    };
    execute(0);
  }
}

// Usage
const manager = new MiddlewareManager();
manager.use(loggerMiddleware);
manager.use(authMiddleware);
manager.use(responseMiddleware);

const context = { url: "/api/data", isAuthenticated: true, response: "OK" };
manager.run(context);
```

### UI example

```typescript
interface Component {
  render(): void;
}

class Button implements Component {
  render() {
    console.log("Rendering a button");
  }
}

const withLogging = (component: Component): Component => ({
  render: () => {
    console.log("Logging before rendering");
    component.render();
  },
});

const withValidation = (component: Component): Component => ({
  render: () => {
    console.log("Validating component");
    component.render();
  },
});

// Composing behaviors
const button = new Button();
const enhancedButton = withLogging(withValidation(button));

enhancedButton.render();
```
