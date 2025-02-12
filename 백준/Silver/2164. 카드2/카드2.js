const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();

const queue = [];
let front = 0;

for (let i = 0; i < +input; i++) {
  queue.push(i + 1);
}

while (queue.length - front > 1) {
  front++; // 첫 번째 원소 버리기
  queue.push(queue[front]); // 두 번째 원소 뒤로 이동
  front++;
}

console.log(queue[front]);