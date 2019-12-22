// *** TSC Copmiler and tsconfig
// tsc -version
// tsc --init
// tsc
// tsc --outDir dist
// tsc -watch
// *** Alternative we can use webpack.config.js
// And the application as following:
// npm install
// npm start

///*** PRIMITIVE TYPES ***
///==================================================================================
console.log('-=====PRIMITIVE TYPES=====-');
///* Numbers *****************
console.log('--NUMBERS--');

let bookCost: number = 10;
function calculatePrice(cost: number): number {
  return cost;
}
const cost: number = calculatePrice(20);
console.log('The price of the book is: ' + cost);

///* String types *****************
console.log('--String Types--');
const username: string = 'charles';

function normalizeUsername(username: string): string {
  return username.toUpperCase();
}

console.log('Normalized username: ' + normalizeUsername('username'));

///* Boolean types *****************
console.log('--Boolean Types--');
function offerDiscount(orders: number): boolean {
  return orders >= 3;
}
console.log('You will get the discount: ');
console.log(+offerDiscount(5) ? 'yes' : 'no');

///*** TYPESCRIPT TYPES ***
///==================================================================================
console.log('-=====TYPESCRIPT TYPES=====-');
///* Any type - should be avoided **********
console.log('--ANY TYPE--');
let price;
price = 25;
price = 'price';

///* Void type **********
console.log('--Void Type--');
let selectedOrder;
function selectOrder(order: string): void {
  selectedOrder = order;
}

console.log('Selected order: ' + selectOrder('salad'));

///* Union type **********
console.log('--Union Type--');
let selectedGender: string = 'man';

function selectGender(gender: 'man' | 'woman' | 'uknown'): void {
  //also works with numbers and booleans
  selectedGender = gender;
}
selectGender('man');

console.log('You have chosen the gender: ' + selectedGender);

///* Function type **********
console.log('--Function Type--');

let totalPrice: (price: number, quantity?: number) => number; //type definition with the return statement
//alternatively
//let sumItems:(price:number, quantity:number)=>number=(x,y)=>x*y;

totalPrice = (price: number, quantity?: number): number => {
  if (quantity) {
    return quantity * price;
  }
  return price;
};

console.log('Total price : ' + totalPrice(12, 5));

//alternatively
//sumItems = (x,y) => x*y;

///* Object type **********
console.log('--Object Type--');

let car: { name: string; price: number; getPrice(): number };

car = {
  name: 'FORD C-MAX',
  price: 26000,
  getPrice() {
    return this.price;
  }
};

console.log('You car costs: ' + car.getPrice());

///* Array types and Generics **********
console.log('--Array Types--');

const cars = ['sedan', 'coupe', 'hatchback']; //implicit type declaration
//OR
let cars2: string[];
cars2 = ['sedan', 'coupe', 'hatchback']; //explicit type declaration
//OR
let cars3: Array<string>; // generic type desclaration
cars3 = ['sedan', 'coupe', 'hatchback'];

console.log('Types of cars: ' + cars[0] + ', ' + cars2[1] + ', ' + cars3[2]);

///* Tuple types for Arrays **********
console.log('--Tuple types for Arrays--');
let cars4: [string, number, boolean];
cars4 = ['FORD C-MAX', 26000, true];
console.log('Information of your car: ' + cars4.toString());

///*** TYPE ALIASES AND ASSERTIONS ***
///==================================================================================
console.log('-=====TYPE ALIASES AND ASSERTIONS=====-');

let carType1: 'sedan' | 'coupe' | 'hatchback' = 'sedan';
const selectType1 = (size: 'sedan' | 'coupe' | 'hatchback') => {
  carType1 = size;
};
selectType1('coupe');

//In order not to repeat the union type we can use type aliases as follow

type CarType = 'sedan' | 'coupe' | 'hatchback';
let selectedCar2: CarType;
selectedCar2 = 'sedan';

const selecType2 = (carType2: CarType) => {
  selectedCar2 = carType2;
};

selecType2('coupe');
console.log('You selected car type is: ' + selectedCar2);

//assertions
type Book = { name: string; author: string };

const book: Book = {
  name: 'Java is auch eine Insel',
  author: 'Ullenboom'
};

const serialized = JSON.stringify(book);
console.log('Serialized book: ' + serialized);

function getAuthorFromJSON(obj: string): Book {
  return JSON.parse(obj).author as Book;
}

console.log("Book's author: " + getAuthorFromJSON(serialized));

///*** ENUMS ***
///==================================================================================
console.log('-=====ENUMS=====-');

///* Numeric Enums **********
console.log('--Numeric Enums--');

enum Sizes {
  Small,
  Medium,
  Large
}

console.log(Sizes.Large);
console.log(Sizes[Sizes.Large]);

const selectedSize = 2;
console.log(Sizes[selectedSize]);

///* Reverse Mapping **********
console.log('--Reverse Mapping--');

enum Sizes {
  ExtraLarge = 3
}

console.log(Sizes);

///* String Enums **********
console.log('--String Enums--');

enum Cars {
  Sedan = 'sedan',
  Coupe = 'coupe',
  Hatchback = 'hatchback'
}

console.log(Cars); // reverse mapping can't be used in this case

///* Inline Members **********
console.log('--Inline Members--');

let selectedCarType: Cars = Cars.Hatchback;

function updateCarType(carType: Cars) {
  selectedCarType = carType;
}

updateCarType(Cars.Coupe);
console.log(selectedCarType);

///*** INTERFACES ***
///==================================================================================
console.log('-=====INTERFACES=====-');

///* Interfaces VS Type Aliases **********
console.log('--Type Aliases--');

type Computer = {
  RAM: number;
  HD: number;
};

// Type alias can be used for types such as primitives, unions, tuples, objects

interface PC {
  RAM: number;
  HD: number;
}

//Interface is a more powerful type, more complex data structure
//It can only be used for objects
//can have multiple merged declarations
// interface Point {x: string};
//Interface Point {y: string};
//const point: Point = {x:1, y:2}

///* Interfaces with Function Types **********
console.log('--Function Types--');

type getAvailableCars = () => void;

//VS

interface PC {
  getAvailableRAM(): number;
}

function createPC(RAM: number, HD: number): PC {
  return {
    RAM,
    HD,
    getAvailableRAM() {
      return 512;
    }
  };
}

const myPC = createPC(512, 512);
console.log(myPC);

///* Extending Interfaces **********
console.log('--Extending Interfaces--');

interface Laptop extends PC {
  color: string;
}

///* Optional Properties **********
console.log('--Optional Properties--');

interface PC {
  CDROM?: boolean;
}

///* Index Signatures **********
console.log('--Index Signatures--');

interface Table {
  name: string;
  [key: number]: string;
}

function createTable(name: string): Table {
  return {
    name
  };
}

let table: Table;
table = createTable('Ikea Skubba');
table[0] = 'Standard';

console.log(table);

///*** Classes ***
///==================================================================================
console.log('-=====CLASSES=====-');

class Box {
  private height: number;
  private width: number;
  protected length: number;
  private items: string[] = [];
  //Read-only members can't be changed, but can be accessed outside the class
  //They can be initialized at declaration or initialized inside the class constructor
  readonly shippingType: string; //like const, final static
  static label: string = 'DHL'; // global variable for all initiated objects

  constructor(
    height: number,
    width: number,
    length: number,
    shippingType: string
  ) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.shippingType = shippingType;
  }

  //public method by default, it also can be defined as private
  addItems(item: string) {
    this.items.push(item);
  }

  //Setters and Getters
  set changeWidth(width: number) {
    this.width = width;
  }

  get changedWidth() {
    return this.width;
  }

  static printLabel(shippingType: string): void {
    console.log('The label on the box is: ' + this.label + ' ' + shippingType);
  }
}

const smallBox = new Box(10, 30, 60, 'Sparversand');
smallBox.changeWidth = 20;
console.log('Versandart: ' + smallBox.shippingType);
console.log('My first box: ' + JSON.stringify(smallBox));

///* Static Properties and Methods **********
console.log('--Static Properties and Methods--');
Box.label = 'Hermes';
Box.printLabel(smallBox.shippingType);

///* Class Inheritance **********
console.log('--Class Inheritance--');

class ExtraLargeBox extends Box {
  private weight: number;

  constructor(
    height: number,
    width: number,
    lenght: number,
    shippingType: string,
    weigth: number
  ) {
    super(height, width, length, shippingType);
    this.weight = weigth;
  }
}

///* Abstract Class **********
console.log('--Abstract Class--');

//Such classes can't be initialised: const boxSize = new BoxSizes()
abstract class BoxSizes {}

///*** Generics and Overloads ***
///==================================================================================
console.log('-=====GENERIC AND OVERLOADS=====-');

///* Function Generics **********
//helps to create dynamic types
console.log('--Function Generics--');

class List<T> {
  private list: T[] = [];

  addItem(item: T): void {
    this.list.push(item);
  }

  getList(): T[] {
    return this.list;
  }
}

const boxList = new List<Box>();
boxList.addItem(new Box(20, 30, 60, 'Warenversand 500'));
console.log('List of Boxes: ' + JSON.stringify(boxList.getList()));

///* Function Overloads **********
console.log('--Function Overloads--');

function reverse(str: string): string;

function reverse<T>(arr: T[]): T[];

function reverse<T>(stringOrArray: string | T[]): string | T[] {
  if (typeof stringOrArray === 'string') {
    return stringOrArray
      .split('')
      .reverse()
      .join('');
  }
  return stringOrArray.slice().reverse();
}

console.log('Reverse String: ' + reverse('Warensendung'));
console.log('Reverse array: ' + reverse(['w500', 'w400', 'w300']));

///*** ES 6/7 in Typescript ***
///==================================================================================
console.log('-=====ES 6/7=====-');

///* Default function parameters **********
console.log('--Default function parameters--');

function multiply1(a: number, b: number) {
  if (!b) {
    b = 5;
  }
  return a * b;
}

//ES6----------------------------------------

function multiply2(a: number, b: number = 5) {
  return a * b;
}

console.log('Multiply 5 and 6 = ' + multiply1(5, 6));
console.log('Mulitiply 5 with 5 = ' + multiply2(5));

///* Object literal improvements **********
console.log('--Object literal improvements--');

const carName = {
  name: 'Ford C-Max'
};

const tires = ['5'];

const superCar1 = {
  carName: carName,
  tires: tires
};

//ES6----------------------------------------

const superCar2 = { carName, tires };

///* Rest Parameters **********
console.log('--Rest Parameters--');

function multiplyAll1(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
): number {
  const arr = [a, b, c, d, e];
  return arr.reduce((prev, next) => prev * next);
}

//ES6----------------------------------------

function multiplyAll2(...arr: number[]) {
  return arr.reduce((prev, next) => prev * next);
}

console.log('Multiply 1, 2, 3, 4, 5 = ' + multiplyAll1(1, 2, 3, 4, 5));
console.log('Multiply 1,2,3,4,5 = ' + multiplyAll2(1, 2, 3, 4, 5));

///* Array and Object Spreads **********
console.log('--Array and Object Spreads--');

const carName1 = ['BMW1', 'Opel'];
const carName2 = ['Ford'];
const allCarNames = [...carName1, ...carName2]; //instead of the concat-function

const carComplectation = {
  ...carName, //makes a copy of the object, instead of Object.assign ({}, carName, {tires});
  tires
};
