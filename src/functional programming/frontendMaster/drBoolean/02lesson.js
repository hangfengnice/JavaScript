const {
  compose,
  last,
  prop,
  head,
  add,
  reduce,
  map,
  toLower,
  replace,
  join,
  filter,
  sortBy,
  append,
  concat,
  flip,
} = require("ramda");

const CARS = [
  { name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
  {
    name: "Spyker C12 Zagato",
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false,
  },
  {
    name: "Jaguar XKR-S",
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false,
  },
  { name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
  {
    name: "Aston Martin One-77",
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true,
  },
  {
    name: "Pagani Huayra",
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false,
  },
];

const isLastInStock = compose(prop("in_stock"), last);
const nameOfFirstCar = compose(prop("name"), head);

const _average = function (xs) {
  return reduce(add, 0, xs) / xs.length;
};
const averageDollarValue = compose(_average, map(prop("dollar_value")));

const _underscore = replace(/\W+/g, "_"); //<-- leave this alone and use to sanitize
const sanitizeNames = map(compose(_underscore, toLower, prop("name")));

const availablePrices = compose(join(", "), map(), filter(prop("in_stock")));

const fastestCar = compose(
  flip(concat)(" is the fastest"),
  prop("name"),
  last,
  sortBy(prop("horsepower"))
);
let ret = sortBy(prop("horsepower"));

console.log(fastestCar(CARS));
