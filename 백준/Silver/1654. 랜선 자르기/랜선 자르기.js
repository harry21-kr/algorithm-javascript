const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const N = +input[0].split(" ")[1];

input.shift();

const arr = input.map(Number);

// 케이블의 갯수를 반환하는 함수
const getCableAmount = (cm) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += Math.floor(arr[i] / cm);
  }

  return count;
};

let min = 0;
let max = Math.max(...arr);

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  const cableAmount = getCableAmount(mid);
  // console.log("mid", mid, "min", min, "max", max);
  // console.log("케이블 개수 : ", cableAmount);

  if (cableAmount > N) {
    // console.log("케이블 초과!");
    min = mid + 1;
  } else if (cableAmount < N) {
    // console.log("케이블 부족!");
    max = mid - 1;
  } else {
    // console.log("케이블 일치!");
    min = mid + 1;
  }
}

console.log(max);