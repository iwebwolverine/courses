## D - Dependency Inversion Principle (DIP)

> The Dependency Inversion Principle emphasizes the importance of decoupling in software architecture. By relying on abstractions, not specific implementations, we can create systems that are more modular, flexible, and adaptive to change.

- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details. Details should depend on abstractions.

### Bad Approach

In the bad approach, the high-level module (`DataService`) directly depends on the low-level modules (`LocalStorage` and `ApiStorage`).

```typescript
class LocalStorage {
  save(data: string): void {
    console.log(`Saving data locally: ${data}`);
  }
}

class ApiStorage {
  saveToApi(data: string): void {
    console.log(`Sending data to API: ${data}`);
  }
}

class DataService {
  storageType: "local" | "api";

  constructor(storageType: "local" | "api") {
    this.storageType = storageType;
  }

  saveData(data: string): void {
    if (this.storageType === "local") {
      const storage = new LocalStorage();
      storage.save(data);
    } else {
      const api = new ApiStorage();
      api.saveToApi(data);
    }
  }
}
```

### Good Approach

The advantage of the good approach is:

- **Flexibility:** Adding a new storage medium is easy. Just create a new class that implements the `StorageMedium` interface.

- **Decoupling:** DataService is decoupled from the specific storage mechanisms. It interacts only with the abstraction.

- **Testability:** It's easier to mock the storage mediums in tests.

```typescript
// Abstraction
interface StorageMedium {
  save(data: string): void;
}

// Concrete implementations
class LocalStorage implements StorageMedium {
  save(data: string): void {
    console.log(`Saving data locally: ${data}`);
  }
}

class ApiStorage implements StorageMedium {
  save(data: string): void {
    console.log(`Sending data to API: ${data}`);
  }
}

class DataService {
  storage: StorageMedium;

  constructor(storage: StorageMedium) {
    this.storage = storage;
  }

  saveData(data: string): void {
    this.storage.save(data);
  }
}
```

### Usage

In the good approach, if you decide to introduce another storage medium, like saving to a file system or cloud storage, you simply need to create a new class that implements the `StorageMedium` interface. The `DataService` remains unchanged, demonstrating the **Dependency Inversion Principle**.

```typescript
const localService = new DataService(new LocalStorage());
localService.saveData("Local data");

const apiService = new DataService(new ApiStorage());
apiService.saveData("API data");
```
