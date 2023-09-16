### Factory Pattern

**Definition:** The `Factory Pattern` is a creational pattern that provides an interface for creating instances of a class, with its subclasses deciding which class to instantiate. Instead of calling the constructor of a class directly, a factory method is used to create the objects.

**Purpose:** The primary reason for using the `Factory Pattern` is to externalize the object creation logic from the client, promoting code reusability and separation of concerns. This pattern is especially useful when the exact type of the object to be created isn't known until runtime or when the creation process is more complex than a simple instantiation.

## Examples

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
