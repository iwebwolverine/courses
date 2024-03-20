## Factory Pattern

**Definition:** The `Factory Pattern` is a creational pattern that provides an interface for creating instances of a class, with its subclasses deciding which class to instantiate. Instead of calling the constructor of a class directly, a factory method is used to create the objects.

**Purpose:** The primary reason for using the `Factory Pattern` is to externalize the object creation logic from the client, promoting code reusability and separation of concerns. This pattern is especially useful when the exact type of the object to be created isn't known until runtime or when the creation process is more complex than a simple instantiation.

### Example DatabaseConnectionFactory

Imagine a scenario where a web application needs to connect to different types of databases depending on the environment (development, staging, production) or based on user preferences.

Instead of hardcoding the creation and initialization logic for each database type within the application, we can use the Factory Pattern to provide a clean way to get the appropriate database connection.

Also we are using an Open/Closed Principle in the current design of `DatabaseConnectionFactory`, whenever you need to support a new type of database, you have to modify the `createConnection` method by adding a new conditional branch. This modification is not ideal according to the principle.

```typescript
// Usage
const factory = new DatabaseConnectionFactory();

// Registering connections
factory.registerConnection("mysql", MySQLConnection);
factory.registerConnection("mongodb", MongoDBConnection);

// Using the factory to create connections
const mySQLConnection = factory.createConnection("mysql");
if (mySQLConnection) {
  mySQLConnection.connect();
  mySQLConnection.close();
}

const mongoDBConnection = factory.createConnection("mongodb");
if (mongoDBConnection) {
  mongoDBConnection.connect();
  mongoDBConnection.close();
}
```

### Example UserFactory

Let's imagine a scenario where we have different types of users in a system, such as Admin, Editor, and Viewer. Each type of user will have its own set of permissions and attributes.

We can create a `UserFactory` that takes in an object parameter with specific fields (like role) to determine which type of user to instantiate.

To maintain the **Open/Closed Principle**, we can utilize a registry-based approach for the factory. Here's how it can be done:

**Registry:** Create a registry to hold mappings between role names and their respective classes.
**Register Method:** Allow new user roles to be registered with the factory without changing the factory code.
**Factory Method:** When creating a user, the factory will use the registry to look up and instantiate the appropriate class.

```typescript
// Registering user types with the factory
UserFactory.registerUserType("admin", Admin);
UserFactory.registerUserType("editor", Editor);
UserFactory.registerUserType("viewer", Viewer);

// Usage remains the same:
const admin = UserFactory.createUser({ role: "admin", name: "John Doe" });
// ... and so on for other user types

// In future, to add a new role, simply define the class and register it.
class SuperAdmin implements User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  view() {
    console.log(`${this.name} can view`);
  }
}

UserFactory.registerUserType("superAdmin", SuperAdmin);
```
