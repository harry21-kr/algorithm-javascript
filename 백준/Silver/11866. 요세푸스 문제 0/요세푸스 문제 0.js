const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

let arr = [];
const answerArr = [];

let pointer = +input[1] - 1;

for (let i = 1; i <= +input[0]; i++) {
  arr.push(i);
}

while (1) {
  if (!arr.length) break;

  if (pointer >= arr.length) {
    pointer -= arr.length;
  } else if (pointer < arr.length) {
    answerArr.push(arr[pointer]);
    arr.splice(pointer, 1);
    pointer += +input[1] - 1;
  }
}

console.log(`<${answerArr.join(", ")}>`);