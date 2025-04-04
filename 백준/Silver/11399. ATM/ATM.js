const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;
let count = 0;

// console.log(arr);

while (count < N) {
  let add = 0;

  for (let i = 0; i <= count; i++) {
    add += arr[i];
  }

  answer += add;

  // console.log("add : ", add);
  // console.log("count : ", count);
  // console.log("answer : ", answer);

  // console.log("----------");

  count++;
}

console.log(answer);