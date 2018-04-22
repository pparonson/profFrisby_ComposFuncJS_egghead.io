const R = require("ramda");

// const box = R.curry(x => [x]);
// const fold = R.curry(arr => {
//   let [a] = arr;
//   return a;
// });

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box: ${x}`
});

// const either = right || left
const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right: ${x}`
});

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left: ${x}`
});

const getColor = color => {
  const found = ({
    red: "FF0000",
    orange: "FFA500",
    yellow: "FFFF00"
  })[color];

  return found ? Right(found) : Left(null);
};

module.exports = {
  Right,
  Left,
  getColor
};
