import { Permission } from "./enums";
import { User } from "./User";

class FileManager {
  constructor(private user: User) {}

  read(): void {
    if (this.user.getRole().hasPermission(Permission.READ)) {
      console.log("Reading file");
    } else {
      console.error("Permission denied: Cannot read file");
    }
  }

  write(): void {
    if (this.user.getRole().hasPermission(Permission.WRITE)) {
      console.log("Writing to file");
    } else {
      console.error("Permission denied: Cannot write to file");
    }
  }

  delete(): void {
    if (this.user.getRole().hasPermission(Permission.DELETE)) {
      console.log("Deleting file");
    } else {
      console.error("Permission denied: Cannot delete file");
    }
  }
}

export { FileManager };
