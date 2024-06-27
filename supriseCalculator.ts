interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
  surprise: () => string;
}

const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  surprise: () => "BOOM! You didn't expect that, did you?",
};

console.log(calculator.add(2, 3));
console.log(calculator.surprise());

class Maths {
  private num1: number;
  private num2: number;
  private operator: string;

  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.operator = "";
  }

  public setNum1(num: number): void {
    this.num1 = num;
  }

  public setNum2(num: number): void {
    this.num2 = num;
  }

  public setOperator(operator: string): void {
    this.operator = operator;
  }

  public calculate(): number {
    switch (this.operator) {
      case "+":
        return this.num1 + this.num2;
      case "-":
        return this.num1 - this.num2;
      case "*":
        return this.num1 * this.num2;
      case "/":
        if (this.num2 === 0) {
          throw new Error("Cannot divide by zero!");
        }
        return this.num1 / this.num2;
      default:
        throw new Error("Invalid operator!");
    }
  }
}

// usage
const math = new Maths();
math.setNum1(10);
math.setNum2(2);
math.setOperator("+");
console.log(math.calculate());

math.setOperator("-");
console.log(math.calculate());

math.setOperator("*");
console.log(math.calculate());

math.setOperator("/");
console.log(math.calculate());
