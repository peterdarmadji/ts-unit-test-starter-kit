import { describe, it, expect, beforeEach } from "vitest";
import {
  addProduct,
  addToCart,
  applyShippingDiscount,
  calculateTotal,
  clearCart,
} from "../src/ecommerce";

let cart = {};
describe("E-commerce System", () => {
  beforeEach(() => {
    addProduct("Soap", 100, 10);
    addProduct("Shampoo", 200, 5);
    addProduct("Daniel", 1000, 5);
    clearCart();
  });

  it("should calculate price of all products", () => {
    addToCart("Soap", 2);
    addToCart("Shampoo", 2);
    
    const sum = calculateTotal();
    expect(sum).toBe(600);
  });

  // TEST 3
  it ("should give discount to item", () => {
    // Arrange
    addToCart("Daniel", 2);
    addToCart("Daniel", 3);

    const total = calculateTotal();
    expect(applyShippingDiscount(total)).toBe(4990);
  });

  // TEST 4
  it ("should not give discount to item", () => {
    // Arrange
    addToCart("Soap", 2);

    const total = calculateTotal();
    expect(applyShippingDiscount(total)).toBe(200);
  });
});
