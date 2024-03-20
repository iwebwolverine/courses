import { Permission } from "../enums";

export interface IRole {
  hasPermission(permission: Permission): boolean;
}
