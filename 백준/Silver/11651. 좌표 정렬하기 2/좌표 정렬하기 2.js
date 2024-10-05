const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1);

const answer = input
  .map((v) => {
    const [x, y] = v.split(" ");
    return { x: +x, y: +y };
  })
  .sort((a, b) => {
    if (a.y === b.y) {
      return a.x - b.x;
    }
    if (b.y > a.y) {
      return -1;
    }
  });

answer.forEach((v) => console.log(v.x, v.y));