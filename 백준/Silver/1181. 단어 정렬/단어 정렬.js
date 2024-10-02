const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1);

const uniqueArr = input.filter((v, idx) => input.indexOf(v) === idx);

const sortedArr = uniqueArr
  .sort((a, b) =>
    a.length == b.length ? a.localeCompare(b) : a.length - b.length
  )
  .join("\n");

console.log(sortedArr);