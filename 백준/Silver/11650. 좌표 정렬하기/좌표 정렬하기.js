const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1);

const answer = input
  .map((v) => {
    const [x, y] = v.split(" ");
    return { x: +x, y: +y };
  })
  .sort((a, b) => {
    if (a.x === b.x) {
      return a.y - b.y;
    }
    if (b.x > a.x) {
      return -1;
    }
  });

answer.forEach((v) => console.log(v.x, v.y));