const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();

const sol = (num) => {
  let answer = 666;
  let count = 1;

  while (1) {
    if (answer.toString().includes("666") && count === num) {
      return answer;
    }

    if (answer.toString().includes("666")) {
      count++;
      answer++;
    } else {
      answer++;
    }
  }
};

const answer = sol(+input);

console.log(answer);