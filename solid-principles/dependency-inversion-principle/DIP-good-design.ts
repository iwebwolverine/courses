interface StorageMedium {
  save(data: string): void;
}

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
