const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((v) => +v);

const cashedArr = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]];

const getCurrentArr = (i) => {
  return [input[i * 2 + 1], input[i * 2 + 2]];
};

for (let i = 0; i < input[0]; i++) {
  const [floor, room] = getCurrentArr(i);

  for (let j = 0; j < floor; j++) {
    if (!cashedArr[j]) {
      const newCashedArr = [];
      let reduce = 0;
      for (let k = 0; k < 14; k++) {
        reduce += cashedArr[j - 1][k];
        newCashedArr.push(reduce);
      }
      cashedArr.push(newCashedArr);
    }
  }
  if (floor == 0) {
    console.log(room);
  } else {
    console.log(
      cashedArr[floor - 1].slice(0, room).reduce((acc, cur) => acc + cur, 0)
    );
  }
}