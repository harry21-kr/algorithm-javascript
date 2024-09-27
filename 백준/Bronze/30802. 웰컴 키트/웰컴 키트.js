const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const tBundle = input[2].split(" ")[0];
const pBundle = input[2].split(" ")[1];
const t = input[1].split(" ").reduce((acc, cur) => {
  if (+cur) {
    if (+cur > tBundle) {
      return acc + Math.ceil(+cur / tBundle);
    } else {
      return acc + 1;
    }
  }
  return acc;
}, 0);
const p = Math.floor(+input[0] / pBundle);
const pRemain = +input[0] - p * pBundle;
console.log(t);
console.log(p, pRemain);