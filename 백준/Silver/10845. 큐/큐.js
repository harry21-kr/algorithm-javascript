const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const queue = [];
let pointer = -1;
const answer = [];

for (let i = 1; i <= +input[0]; i++) {
  if (input[i].includes(" ")) {
    queue.push(+input[i].split(" ")[1]);
    pointer++;
  }

  if (input[i] === "pop") {
    if (pointer === -1) {
      answer.push(pointer);
    } else {
      answer.push(queue.shift());
      pointer--;
    }
  }

  if (input[i] === "size") {
    answer.push(pointer + 1);
  }

  if (input[i] === "empty") {
    answer.push(pointer === -1 ? 1 : 0);
  }

  if (input[i] === "front") {
    answer.push(pointer === -1 ? pointer : queue[0]);
  }

  if (input[i] === "back") {
    answer.push(pointer === -1 ? pointer : queue[pointer]);
  }
}

console.log(answer.join("\n"));