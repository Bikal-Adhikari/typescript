class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const stringContainer = new Container<string>("Hello");
console.log(stringContainer.getValue()); // "Hello"

const numberContainer = new Container<number>(42);
console.log(numberContainer.getValue()); // 42
