console.log('Hello world TypeScript');

// Boolean
let muted: boolean = true;
muted = false;

// Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

// Arrays
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
// people.push("9000") --> Error

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9001);

// Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
  Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Amarillo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = {type: 'Wildcard'};

// Object
let someObject: object = {type: 'Wildcard'};

// Funciones
function add(a: number, b: number) {
  return a + b;
}

const sum = add(2, 5);
console.log('add(2, 5)->', sum);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);
console.log(`fourPlus6 ${fourPlus6}`);

function fullName(firstName: string, lastName: string = ''): string {
  return `${firstName} ${lastName}`;
}

const anbreaker = fullName('anbreaker');
console.log(anbreaker);

//Interfaces
interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  //   color: Color.Verde,
};

function area(r: Rectangulo) {
  return r.alto * r.ancho;
}

let areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : 'Un rectangulo';
};

console.log(rect.toString());
