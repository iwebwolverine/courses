// Abstract Database Connection
interface DatabaseConnection {
  connect(): void;
  close(): void;
}

// Abstract Database Connection
interface DatabaseConnection {
  connect(): void;
  close(): void;
}

// Concrete Database Connections
class MySQLConnection implements DatabaseConnection {
  connect(): void {
    console.log("Connecting to MySQL...");
  }

  close(): void {
    console.log("Closing MySQL connection...");
  }
}

class MongoDBConnection implements DatabaseConnection {
  connect(): void {
    console.log("Connecting to MongoDB...");
  }

  close(): void {
    console.log("Closing MongoDB connection...");
  }
}

// Concrete Database Connections remain the same...

// Improved Database Connection Factory
class DatabaseConnectionFactory {
  private connectionRegistry: Map<string, new () => DatabaseConnection> =
    new Map();

  registerConnection(
    type: string,
    connectionClass: new () => DatabaseConnection
  ) {
    this.connectionRegistry.set(type, connectionClass);
  }

  createConnection(type: string): DatabaseConnection | null {
    const ConnectionClass = this.connectionRegistry.get(type);
    return ConnectionClass ? new ConnectionClass() : null;
  }
}
