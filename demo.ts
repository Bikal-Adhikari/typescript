let firstName: string = "Hari";
let lastName: string = "Krishna";
let age: number = 25;
let isAdmin: boolean = true;

let uncertain: unknown = "hello";
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isAdmin);

if (typeof uncertain === "string") {
  console.log(uncertain.toUpperCase());
}
console.log(uncertain);

function sum(a: number, b: number, c?: number): number {
  return a + b;
}

console.log(sum(1, 2));

function welcome(name: string, greetings: string): string {
  return `${greetings} ${name}`;
}
console.log(welcome("Namaste", "Hari"));

function add(a: number, b: number, c?: number): string {
  return "The sum is:" + (a + b);
}
console.log(add(1, 2));

const multiply = (a: number, b: number): number => a * b;
console.log(multiply(5, 5));

function calculateTotalPrice(
  quantity: number,
  price: number,
  tax: number
): number {
  return quantity * price * (1 + tax / 100);
}

const productPrice: number = 100;
const productQuantity: number = 10;
const productTax: number = 0.1;

console.log(calculateTotalPrice(productQuantity, productPrice, productTax));

let person: { name: string; age: number };
person = { name: "Hari", age: 25 };

console.log(person);

interface Human {
  name: string;
  age: number;
  isLoggedin: boolean;
}

let p1: Human;
p1 = { name: "Hari", age: 25, isLoggedin: true };
let p2: Human;
p2 = { name: "Sita", age: 20, isLoggedin: false };
console.log(p1, p2);

const printAsterikPyramid = (n: number): void => {
  for (let i = 1; i <= n; i++) {
    let asterik = "";
    for (let j = 1; j <= i; j++) {
      asterik += "*";
    }
    console.log(asterik);
  }
};

printAsterikPyramid(5);
