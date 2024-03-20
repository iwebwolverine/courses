import { IRole } from "./IRole";
import { Permission } from "../enums";

export class ContributorRole implements IRole {
  private permissions = [Permission.READ, Permission.WRITE];

  hasPermission(permission: Permission): boolean {
    return this.permissions.includes(permission);
  }
}
