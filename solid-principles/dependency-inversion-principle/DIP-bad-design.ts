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
