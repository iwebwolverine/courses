## O - Open/Closed Principle (OCP)

> - Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
> - This means that the behavior of a module can be extended without modifying its source code. This is typically achieved using interfaces or abstract classes where new functionality can be added by creating new subclasses or implementing interfaces, without altering existing code.

### Bad Approach

Instead of using an interface for `DiscountStrategy`, the `Order` class determines which discount to apply based on a string identifier. This would mean every time a new discount is introduced, the `Order` class would need modification.

**In this bad approach:**

- Every time a new sale or discount event is introduced, you'll have to modify the `getDiscountedAmount` method of the `Order` class to accommodate it.

- The Order class has to be aware of every possible discount, violating the Single Responsibility Principle. It now has multiple reasons to change.

- The design isn't flexible. Testing becomes more cumbersome as you'd need to ensure all conditions work as expected whenever any change is made.

- This design violates the Open/Closed Principle because you can't introduce new discount types without altering the existing `Order` class. Instead of being open for extension but closed for modification, this design is open for both extension and modification.

```typescript
class Order {
  amount: number;
  discountType: string;

  constructor(amount: number, discountType: string) {
    this.amount = amount;
    this.discountType = discountType;
  }

  getDiscountedAmount(): number {
    if (this.discountType === "SummerSale") {
      return this.amount * 0.9;
    } else if (this.discountType === "BlackFriday") {
      return this.amount * 0.8;
    } else if (this.discountType === "NewYear") {
      return this.amount * 0.85;
    } else {
      return this.amount;
    }
  }
}
```

### Good Approach

The code is open for extension but closed for modification. If you need to add a new discount strategy in the future, you can simply create a new class that implements the DiscountStrategy interface. The existing code won't need any modification.

```typescript
interface DiscountStrategy {
  getDiscountedAmount(amount: number): number;
}

class SummerSaleDiscount implements DiscountStrategy {
  getDiscountedAmount(amount: number): number {
    return amount * 0.9;
  }
}

class BlackFridayDiscount implements DiscountStrategy {
  getDiscountedAmount(amount: number): number {
    return amount * 0.8;
  }
}

class NewYearDiscount implements DiscountStrategy {
  getDiscountedAmount(amount: number): number {
    return amount * 0.85;
  }
}

class Order {
  amount: number;
  discountStrategy: DiscountStrategy;

  constructor(amount: number, discountStrategy: DiscountStrategy) {
    this.amount = amount;
    this.discountStrategy = discountStrategy;
  }

  getDiscountedAmount(): number {
    return this.discountStrategy.getDiscountedAmount(this.amount);
  }
}
```
