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

///*** Primitive Types ***
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

///*** Typescript Types ***
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
let cars3: Array<string>; // generic type descalration
cars3 = ['sedan', 'coupe', 'hatchback'];

console.log('Types of cars: ' + cars[0] + ', ' + cars2[1] + ', ' + cars3[2]);

///* Tuple types for Arrays **********
console.log('--Tuple types for Arrays--');
let cars4: [string, number, boolean];
cars4 = ['FORD C-MAX', 26000, true];
console.log('Information of your car: ' + cars4.toString());

///*** Type Aliases and Assertions ***
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
