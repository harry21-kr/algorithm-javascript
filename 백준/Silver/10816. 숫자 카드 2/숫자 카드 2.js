const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const answer = [];

const myCardArr = input[1].split(" ").map(Number);

const hashSet = [...new Set(myCardArr)].sort((a, b) => a - b);
const hashMap = {};

for (let i = 0; i < myCardArr.length; i++) {
  if (!hashMap[myCardArr[i]]) {
    hashMap[myCardArr[i]] = 1;
  } else {
    hashMap[myCardArr[i]]++;
  }
}

const compareCardArr = input[3].split(" ").map(Number);

const sol = (arr, targetNum) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === targetNum) {
      answer.push(hashMap[arr[mid]]);
      return;
    } else if (arr[mid] > targetNum) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  answer.push(0);
};

for (let i = 0; i < compareCardArr.length; i++) {
  sol(hashSet, compareCardArr[i]);
}

console.log(answer.join(" "));