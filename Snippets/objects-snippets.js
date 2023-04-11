const obj = {
  rocket: "🚀",
  car: "🚗",
};

for (k of Object.entries(obj)) {
  console.log(k);
}

for (const [k, v] of Object.entries(obj)) {
  console.log(k, v);
}

// References
const original = {};

const x = original;
const y = original;

x === y; // true
x === {}; // false

// Cloning

const original2 = {
  hello: "world",
};

const clone = Object.assign({}, original2);

clone === original2; // false

original2.hello = "changed!";

clone.hello; // world (did not change)

const obj2 = {
  username: "Jeff",
  hello() {
    console.log(`My name is ${this.username}`);
  },
};

obj2.hello(); // My name is Jeff

function Boat(name) {
  this.name = name;
  this.created = Date.now();

  this.horn = function () {
    console.log(this.name);
  };
}

const sally = new Boat("Sally");
const molly = new Boat("Molly");

sally.horn(); // Sally
