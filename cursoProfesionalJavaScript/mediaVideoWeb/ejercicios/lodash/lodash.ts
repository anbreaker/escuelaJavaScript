import lodash from 'lodash';
// Decorator Pattern
// Monkey patching

class MacbookPro {
  memory: number;

  constructor() {
    this.memory = 8;
  }

  cost(): number {
    return 2399;
  }
}

function withMemory(amount: number, computer: MacbookPro): void {
  let cost: number = computer.cost();

  computer.cost = function (): number {
    let memoryCost: number = Math.max((amount - 8) * 25, 0);

    return cost + memoryCost;
  };
}

let macbook: MacbookPro = new MacbookPro();
withMemory(32, macbook);

console.log(macbook.cost());
// 2999

// Decorator con
// lodash.memoize
function measure(fn) {
  let start = Date.now();
  fn();
  console.log(`Time: ${Date.now() - start}ms`);
}

function fibonacci(num) {
  // ....
}

let fastFibonacci = lodash.memoize(fibonacci);

measure(() => fastFibonacci(100000)); // Time: 625ms
measure(() => fastFibonacci(10000)); // Time: 0ms```
