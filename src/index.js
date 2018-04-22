const R = require("ramda");

const {nextCharForNumberString} = require("./dfwct");
const {applyDiscount} = require("./rictasceub");
<<<<<<< HEAD
const {Right, Left, getColor} = require("./eancwccbue");

=======
const {right} = require("./eancwccbue");
const {getPort} = require("./acoeectic");
>>>>>>> feature/acoeectic

// console.log(nextCharForNumberString(" 64 "));

// console.log(moneyToFloat("$5.25"));
// console.log(applyDiscount("$5.25", "20%"));
<<<<<<< HEAD
let add1 = x => x + 1;
let add2 = x => x + 2;

let result = getColor("green")
  .map(c => c.slice(1))
  .fold(d => "error: ${d}",
        c => c.toUpperCase());

=======

const result = getPort();
>>>>>>> feature/acoeectic
console.log(result);
