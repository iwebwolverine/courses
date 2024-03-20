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