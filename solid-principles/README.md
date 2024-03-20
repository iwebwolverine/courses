# SOLID Principles

SOLID is an acronym that represents a set of five design principles to make software designs more understandable, flexible, and maintainable. They are widely used in object-oriented programming (OOP) and software architecture. Here are the SOLID principles:

### [S - Single Responsibility Principle (SRP)](https://github.com/iwebwolverine/courses/tree/main/solid-principles/single-responsibility-principle)

- A class should have only one reason to change.
- This principle asserts that a class or module should do only one job. If a class has more than one responsibility, it becomes coupled, making changes in one responsibility potentially affect the other. By keeping each class to a single responsibility, the software becomes more modular and changes are isolated, reducing the risk of unintended consequences.

### [O - Open/Closed Principle (OCP)](https://github.com/iwebwolverine/courses/tree/main/solid-principles/open-closed-principle)

- Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
- This means that the behavior of a module can be extended without modifying its source code. This is typically achieved using interfaces or abstract classes where new functionality can be added by creating new subclasses or implementing interfaces, without altering existing code.

### [L - Liskov Substitution Principle (LSP)](https://github.com/iwebwolverine/courses/tree/main/solid-principles/liskov-substitution-principle)

- Objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program.
- For example, if you have a class "Bird" and a subclass "Penguin", any code that works with an instance of Bird should also work if given an instance of Penguin. This ensures that a derived class is truly a subtype of its base class.

### [I - Interface Segregation Principle (ISP)](https://github.com/iwebwolverine/courses/tree/main/solid-principles/interface-segregation-principle)

- Clients should not be forced to depend on interfaces they do not use.
- This principle asserts that a class should not be forced to implement interfaces it doesn’t use. Instead of one big interface, multiple, smaller interfaces are preferred based on groups of methods related to specific behaviors. This promotes system decoupling and easier code navigation.

### [D - Dependency Inversion Principle (DIP)](https://github.com/iwebwolverine/courses/tree/main/solid-principles/dependency-inversion-principle)

- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details. Details should depend on abstractions.
- This means that you should depend on abstractions, not on concrete implementations. For instance, if a class needs to access a database, it's better for it to depend on an abstract database interface rather than a specific database implementation. This allows for flexibility and makes the system more modular and adaptable to changes.
