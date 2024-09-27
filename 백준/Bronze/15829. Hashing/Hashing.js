const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const answer = input[1]
  .split("")
  .reduce(
    (acc, cur, idx) => acc + BigInt(cur.charCodeAt() - 96) * 31n ** BigInt(idx),
    BigInt(0)
  );
console.log(Number(answer % 1234567891n));