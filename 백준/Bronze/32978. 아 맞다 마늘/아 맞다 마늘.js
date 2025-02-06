const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const arr1 = input[1].split(" ");
const arr2 = input[2].split(" ");

arr1.forEach((v) => {
  if (!arr2.includes(v)) {
    console.log(v);
    return;
  }
});