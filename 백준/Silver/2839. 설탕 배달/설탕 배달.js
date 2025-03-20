const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();

let weight = +input;
let answer = 0;

while (weight > 0) {
  if (weight % 5 == 0) {
    answer += weight / 5;
    break;
  }

  weight -= 3;
  answer++;

  if (weight < 0) {
    answer = -1;
    break;
  }
}

console.log(answer);