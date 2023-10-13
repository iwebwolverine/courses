import { IRole } from "./IRole";
import { Permission } from "../enums";

export class AdminRole implements IRole {
  hasPermission(permission: Permission): boolean {
    return true;
  }
}
