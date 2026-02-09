const { expect } = require("chai");
const calculator = require("../calculator");

describe("Calculator", () => {

  it("should add two numbers", () => {
    const result = calculator.add(2, 3);
    expect(result).to.equal(5);
  });

  it("should subtract two numbers", () => {
    const result = calculator.subtract(5, 3);
    expect(result).to.equal(2);
  });

  it("should multiply two numbers", () => {
    const result = calculator.multiply(4, 3);
    expect(result).to.equal(12);
  });

});
