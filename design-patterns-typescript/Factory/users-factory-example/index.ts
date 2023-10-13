import { User } from "./User";
import { AdminRole } from "./user-roles/AdminRole";
import { FileManager } from "./FileManager";
import { UsersFactory } from "./UsersFactory";

// Usage
const factory = new UsersFactory();

const admin = factory.createUser({ role: "admin" });
const fileManagerForAdmin = new FileManager(admin);
fileManagerForAdmin.read();
fileManagerForAdmin.write();
fileManagerForAdmin.delete();

const viewer = factory.createUser({ role: "viewer" });
const fileManagerForViewer = new FileManager(viewer);
fileManagerForViewer.read();
fileManagerForViewer.write(); // Should show permission error
fileManagerForViewer.delete(); // Should show permission error

// Extend UsersFactory with a new role without modifying the UsersFactory class
class EditorRole implements Role {
  private permissions = [Permission.READ, Permission.WRITE];

  hasPermission(permission: Permission): boolean {
    return this.permissions.includes(permission);
  }
}

factory.registerUserType("editor", () => new EditorRole());
const editor = factory.createUser({ role: "editor" });
const fileManagerForEditor = new FileManager(editor);
fileManagerForEditor.read();
fileManagerForEditor.write();
fileManagerForEditor.delete(); // Should show permission error
