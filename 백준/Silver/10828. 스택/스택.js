const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const stack = [];
let pointer = -1;

for (let i = 1; i <= +input[0]; i++) {
  if (input[i].includes(" ")) {
    stack.push(+input[i].split(" ")[1]);
    pointer++;
  }

  if (input[i] === "pop") {
    if (pointer === -1) {
      console.log(pointer);
    } else {
      console.log(stack.pop());
      pointer--;
    }
  }

  if (input[i] === "size") {
    console.log(pointer + 1);
  }

  if (input[i] === "empty") {
    console.log(pointer === -1 ? 1 : 0);
  }

  if (input[i] === "top") {
    console.log(pointer === -1 ? pointer : stack[pointer]);
  }
}