const R = require("ramda");

const box = R.curry(x => [x]);
const fold = R.curry(arr => {
  let [a] = arr;
  return a;
});
const inspect = R.curry(x => `Box${x}`);

// const moneyToFloat = str =>
//   parseFloat(str.replace(/\$/g, ""));
//
// const percentToFloat = str => {
//   const replaced = str.replace(/\%/g, "");
//   const number = parseFloat(replaced);
//   return number * 0.01;
// };
//
// const applyDiscount = (price, discount) => {
//   const cost = moneyToFloat(price);
//   const savings = percentToFloat(discount);
//   const total =  cost - cost * savings;
//   return total;
// };

const moneyToFloat = R.compose(
  R.map(i => parseFloat(i)),
  R.map(i => i.replace(/[$]/g, "")),
  box
);

const percentToFloat = R.compose(
  R.map(i => i * 0.01),
  R.map(i => parseFloat(i)),
  R.map(i => i.replace(/[%]/g, "")),
  box
);

const applyDiscount = R.curry((price, discount) => {
  const cost = moneyToFloat(price);
  const savings = percentToFloat(discount);
  return cost - (cost * savings);
});

module.exports = {
  applyDiscount
};
