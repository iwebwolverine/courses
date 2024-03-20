import { IRole } from "./IRole";
import { Permission } from "../enums";

export class ViewerRole implements IRole {
  private permissions = [Permission.READ];

  hasPermission(permission: Permission): boolean {
    return this.permissions.includes(permission);
  }
}
