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
console.log('--STRING TYPES--');
const username: string = 'charles';

function normalizeUsername(username: string): string {
  return username.toUpperCase();
}

console.log('Normalized username: ' + normalizeUsername('username'));

///* Boolean types *****************
console.log('--BOOLEAN TYPES--');
function offerDiscount(orders: number): boolean {
  return orders >= 3;
}
console.log('You will get the discount: ');
console.log(+offerDiscount(5) ? 'yes' : 'no');

///*** Typescript Types ***
console.log('-=====TYPESCRIPT TYPES=====-');
///* Any type - should be avoided **********
console.log('--ANY TYPE--');
let price;
price = 25;
price = 'price';

///* Void type **********
console.log('--VOID TYPE--');
let selectedOrder;
function selectOrder(order: string): void {
  selectedOrder = order;
}

console.log('Selected order: ' + selectOrder('salad'));

///* Union type **********
console.log('--UNION TYPE--');
let selectedGender: string = 'men';

function selectGender(gender: 'men' | 'women' | 'unisex'): void {
  //also works with numbers and booleans
  selectedGender = gender;
}
selectGender('men');

console.log('You have chosen the gender: ' + selectedGender);

///* Function type **********
console.log('--FUNCTION TYPE--');

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
