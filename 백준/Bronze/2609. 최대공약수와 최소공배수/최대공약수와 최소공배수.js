const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");
let a = Math.max(...input);
let b = Math.min(...input);
let r;

while (!(r == 0)) {
  r = a % b;
  a = b;
  b = r;
}

console.log(a);
console.log((input[0] * input[1]) / a);