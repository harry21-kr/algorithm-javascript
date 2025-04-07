const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0].split(" ")[0];

input.shift();

const map = new Map(input.splice(0, N).map((v) => v.split(" ")));

for (let i = 0; i < input.length; i++) {
  if (map.has(input[i])) {
    console.log(map.get(input[i]));
  }
}