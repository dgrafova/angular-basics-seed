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
