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