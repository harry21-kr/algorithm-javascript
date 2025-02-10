const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const answer = [];

for (let i = 1; i <= +input[0]; i++) {
  const [curX, curY] = input[i].split(" ").map(Number);

  let count = 1;
  let biggerPeople = 0;

  while (1) {
    // 반복문 종료 조건
    // 1. 모든 배열을 순회하였을때
    // 2. 중복된 배열일때

    if (count > +input[0]) {
      answer.push(biggerPeople + 1);
      break;
    }

    // 반복문 건너뛰기 조건
    // 1. 현재 배열이 current의 배열과 일치할때

    if (count === i) {
      count++;
      continue;
    }

    // current 배열과 target 배열을 비교

    const [targetX, targetY] = input[count].split(" ").map(Number);

    if (curX < targetX && curY < targetY) {
      biggerPeople++;
    }

    count++;
  }
}

console.log(answer.join(" "));