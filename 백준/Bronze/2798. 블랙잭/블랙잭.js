const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const length = +input[0].split(" ")[0];
const limit = +input[0].split(" ")[1];
const arr = input[1].split(" ");
let answer = 0;
for (let i = 0; i < length; i++) {
  for (let j = i + 1; j < length; j++) {
    for (let k = j + 1; k < length; k++) {
      if (
        +arr[i] + +arr[j] + +arr[k] <= limit &&
        +arr[i] + +arr[j] + +arr[k] > answer
      ) {
        answer = +arr[i] + +arr[j] + +arr[k];
      }
    }
  }
}
console.log(answer);