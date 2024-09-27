const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const length = +input[0];
const arr = input[1].split("").map((v) => v.charCodeAt() - 96);
let answer = 0;
for (let i = 0; i < length; i++) {
  answer += +arr[i] * Math.pow(31, i);
}
console.log(answer);