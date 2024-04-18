console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100; i++) {
  console.log(i);
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FUZZBUZZ");
  } else {
    if (i % 3 == 0) {
      console.log("FUZZ");
    }
    if (i % 5 == 0) {
      console.log("BUZZ");
    }
  }
}

let i = 1;
while (i <= 100);
console.log(i);
if (i % 3 == 0 && i % 5 == 0) {
  console.log("FUZZBUZZ");
} else {
  if (i % 3 == 0) {
    console.log("FUZZ");
  }
  if (i % 5 == 0) {
    console.log("BUZZ");
    i++;
  }
}

do {
  console.log(i);
  if (x % 3 == 0 && x % 5 == 0) {
    console.log("FUZZBUZZ");
  } else {
    if (x % 3 == 0) {
      console.log("FUZZ");
    }
    if (x % 5 == 0) {
      console.log("BUZZ");
    }
  }
} while (x <= 100);

console.log("Exercise 4 \n------------\n");

let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++) {
  console.log(i);
  if (i == value) {
    console.log(`Found ${value}!`);
    break;
  }
}
if (!valueFound) {
  console.log(`Did not find ${value} within 1-${n}..`);
}

console.log("Exercise 5 \n------------\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++) {
  if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
    console.log(`FIZZBUZZ`);
  } else if (i % fizzDivisor === 0) {
    console.log(`FIZZ`);
  } else if (i % buzzDivisor) {
  }
}
