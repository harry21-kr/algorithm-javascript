const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= +input[0]; i++) {
  let strStack = "";
  let front = -1;
  for (const str of input[i]) {
    if (strStack[front] === "(" && str === ")") {
      strStack = strStack.slice(0, front);
      front--;
      continue;
    }
    strStack += str;
    front++;
  }

  if (strStack.length) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}