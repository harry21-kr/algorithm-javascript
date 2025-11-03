const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numCase = +input.shift();

const answerArr = [];

for (let i = 0; i < numCase * 2; i += 2) {
  const [numDoc, targetDocIdx] = input[i].split(" ").map(Number);
  const docList = input[i + 1].split(" ").map(Number);

  const queue = docList.map((_, idx) => idx);
  const arr = [];
  while (docList.length) {
    const high = Math.max(...docList);
    if (docList[0] !== high) {
      docList.push(docList.shift());
      queue.push(queue.shift());
    } else {
      docList.shift();
      arr.push(queue.shift());
    }
  }

  for (let i = 0; i < numDoc; i++) {
    if (arr[i] === targetDocIdx) {
      answerArr.push(i + 1);
    }
  }
}

console.log(answerArr.join("\n"));
