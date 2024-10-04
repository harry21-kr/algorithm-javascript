const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1);

const answer = input
  .map((string) => {
    const curArr = string.split(" ");
    const age = +curArr[0];
    const name = curArr[1];

    return { age, name };
  })
  .sort((a, b) => a.age - b.age)
  .map((member) => `${member.age} ${member.name}`);

console.log(answer.join("\n"));