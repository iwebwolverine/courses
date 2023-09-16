interface User {
  name: string;
  view(): void;
  edit?(): void;
  manage?(): void;
}

class Admin implements User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  view() {
    console.log(`${this.name} can view`);
  }
  edit() {
    console.log(`${this.name} can edit`);
  }
  manage() {
    console.log(`${this.name} can manage`);
  }
}

class Editor implements User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  view() {
    console.log(`${this.name} can view`);
  }
  edit() {
    console.log(`${this.name} can edit`);
  }
}

class Viewer implements User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  view() {
    console.log(`${this.name} can view`);
  }
}

interface User {
  name: string;
  view(): void;
  edit?(): void;
  manage?(): void;
}

interface UserConfig {
  role: string;
  name: string;
}

class UserFactory {
  private static registry: { [role: string]: { new (name: string): User } } =
    {};

  static registerUserType(
    role: string,
    userType: { new (name: string): User }
  ): void {
    this.registry[role] = userType;
  }

  static createUser(config: UserConfig): User {
    const UserType = this.registry[config.role];
    if (UserType) {
      return new UserType(config.name);
    }
    throw new Error(`No user type registered for role: ${config.role}`);
  }
}
