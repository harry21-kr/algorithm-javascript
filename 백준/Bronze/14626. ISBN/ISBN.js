const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const code = +input[12];
let add = 0;
let mul = 1;

for (let i = 1; i < input.length; i++) {
  if (input[i - 1] !== "*") {
    if (i % 2) {
      add += +input[i - 1];
    } else {
      add += +input[i - 1] * 3;
    }
  } else {
    if (i % 2) {
      mul = 1;
    } else {
      mul = 3;
    }
  }
}

for (let i = 0; i < 10; i++) {
  if (code) {
    if (10 - ((add + i * mul) % 10) === code) {
      console.log(i);
    }
  } else {
    if ((add + i * mul) % 10 === 0) {
      console.log(i);
    }
  }
}