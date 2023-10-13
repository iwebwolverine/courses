import { User } from "./User";

type IRegistry = { [role: string]: { new (name: string): User } };

type IUserDate = {
  name: string;
  role: string;
};

class UsersFactory {
  private static registry: IRegistry = {};

  static registerUserType(
    role: string,
    userType: { new (name: string): User }
  ): void {
    this.registry[role] = userType;
  }

  static createUser(userData: IUserDate): User {
    const UserType = this.registry[userData.role];
    if (UserType) {
      return new UserType(userData.name);
    }

    throw new Error(`No user type registered for role: ${userData.role}`);
  }
}

export { UsersFactory };
