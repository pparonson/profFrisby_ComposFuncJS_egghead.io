const R = require("ramda");

const box = R.curry(x => [x]);

const fold = R.curry(arr => {
  let [a] = arr;
  return a;
});

// const nextCharForNumberString = str => {
// 	const trimmed = str.trim();
// 	const number = parseInt(trimmed);
// 	const nextNumber = number +1;
// 	return String.fromCharCode(nextNumber);
// };

// const nextCharForNumberString = str =>
//   String.fromCharCode(parseInt(str.trim(str)) + 1);

// const Box  = x => {
//   return {
//       map: f => Box(f(x)),
//       inspect: () => `Box(${x})`
//   };
//
// };

const nextCharForNumberString = R.compose(
  fold,
  R.map(s => String.fromCharCode(s)),
  R.map(s => R.inc(s)),
  R.map(s => parseInt(s)),
  R.map(s => s.trim()),
  box
);

module.exports = {
  nextCharForNumberString
};
