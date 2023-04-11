import fetch from "node-fetch";

console.log("Synchronous 1");
// Gets executed first

setTimeout((_) => console.log("Timeout 2"), 0);
// Get executed fourth because async code gets executed at the start of the next event loop if it is resolved

Promise.resolve().then((_) => console.log("Promise"));
// Gets executed third because microtask are executed at the end of the event loop if they are resolved and take priority

console.log("Synchronous 4");
// Gets executed second

const promise = fetch("https://jsonplaceholder.typicode.com/posts/1");

promise
  .then((res) => res.json())
  .then((user) => console.log(user.title))
  .catch((err) => console.log(err));

const testing = () => {
  return Promise.resolve().then((v) => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    console.log("billion loops done");
  });
};

// These are the same
const getFruit = (name) => {
  const fruits = {
    pineapple: "pineapple",
    peach: "peach",
  };

  return Promise.resolve(fruits[name]);
};

const getFruit2 = async (name) => {
  const fruits = {
    pineapple: "pineapple",
    peach: "peach",
  };

  return fruits[name];
};

// Async + Await vs old way

const makeSmoothie = () => {
  let a;
  return getFruit("pineapple")
    .then((v) => {
      a = v;
      return getFruit("peach");
    })
    .then((b) => [a, b])
    .then((val) => console.log(val))
    .catch((error) => console.log(error));
};

const makeSmoothie2 = async () => {
  try {
    const a = getFruit("pineapple");
    const b = getFruit("peach");
    return Promise.all([a, b]).then((val) => console.log(val));
  } catch (error) {
    console.log(error);
  }
};

makeSmoothie();
makeSmoothie2();

// Async for loop

const fruits = ["Peach", "Pineapple"];

const fruitLoop = async () => {
  for await (const f of fruits) {
    console.log(f);
  }
};

fruitLoop();

// Async conditional

const fruitInspection = async () => {
  if ((await getFruit("peach")) === "peach") {
    console.log("Looks peachy!");
  }
};

fruitInspection();
