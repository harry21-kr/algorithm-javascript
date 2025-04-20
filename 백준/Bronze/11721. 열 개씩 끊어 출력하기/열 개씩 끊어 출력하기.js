const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let answer = "";

for (let i = 0; i < input.length; i++) {
  answer += input[i];

  if (i !== 0 && (i + 1) % 10 === 0) {
    answer += `\n`;
  }
}

console.log(answer);