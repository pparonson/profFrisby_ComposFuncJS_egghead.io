const R = require("ramda");

const {nextCharForNumberString} = require("./dfwct");
const {applyDiscount} = require("./rictasceub");
const {Right, Left, getColor} = require("./eancwccbue");


// console.log(nextCharForNumberString(" 64 "));

// console.log(moneyToFloat("$5.25"));
// console.log(applyDiscount("$5.25", "20%"));
let add1 = x => x + 1;
let add2 = x => x + 2;

let result = getColor("green")
  .map(c => c.slice(1))
  .fold(d => "error: ${d}",
        c => c.toUpperCase());

console.log(result);
