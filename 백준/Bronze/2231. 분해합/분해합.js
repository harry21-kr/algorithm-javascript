const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();
for (let i = 1; i <= +input; i++) {
  const arr = i.toString().split("");
  if (i + arr.reduce((acc, cur) => acc + +cur, 0) == input) {
    console.log(i);
    break;
  } else if (i === +input) {
    console.log(0);
    break;
  }
}