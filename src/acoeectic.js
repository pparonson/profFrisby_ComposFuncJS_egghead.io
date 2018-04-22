const R = require("ramda");
const fs = require("fs");

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

const fromNullable = x => x != null ? Right(x) : Left(null);
const tryCatch = f => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e);
  }
}

// const getPort = () => {
//   try {
//     const str = fs.readFileSync("src/etc/config.json");
//     const config = JSON.parse(str);
//     return config.port;
//   } catch (e) {
//     return 3000;
//   }
// };

const getPort = () =>
  tryCatch()
  fs.readFileSync("src/etc/config.json"
  try {
    const str = fs.readFileSync("src/etc/config.json");
    const config = JSON.parse(str);
    return config.port;
  } catch (e) {
    return 3000;
  }


module.exports = {
  getPort
}
