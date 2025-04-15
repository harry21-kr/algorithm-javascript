const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const chipBurger = input.splice(0, 3).sort((a, b) => a - b)[0];

const chipDrink = input.sort((a, b) => a - b)[0];

console.log(chipBurger + chipDrink - 50);