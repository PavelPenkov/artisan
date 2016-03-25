var sum = (x, y) => x + y;

class Foo {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

export { sum, Foo }
