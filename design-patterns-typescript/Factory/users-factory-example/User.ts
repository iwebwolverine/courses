import { IRole } from "./user-roles/IRole";

class User {
  constructor(private role: IRole) {}

  getRole(): IRole {
    return this.role;
  }
}

export { User };
