const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const whitePattern = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackPattern = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

input.shift();

const initBoard = input;

const answer = [];

// 두 개의 보드를 비교하는 함수를 작성한다.
const compareBoard = (targetBoard) => {
  let whiteCount = 0;
  let blackCount = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (whitePattern[i][j] !== targetBoard[i][j]) {
        whiteCount++;
      }
      if (blackPattern[i][j] !== targetBoard[i][j]) {
        blackCount++;
      }
    }
  }

  return whiteCount > blackCount ? blackCount : whiteCount;
};

// 최대로 만들 수 있는 보드의 개수와 모양을 구한 뒤,
// 정해진 보드와 만들어진 보드를 비교한다.
for (let i = 0; i < N - 7; i++) {
  const slicedBoard = initBoard.slice(i, i + 8);

  for (let j = 0; j < M - 7; j++) {
    const targetBoard = slicedBoard.map((v) => v.slice(j, j + 8));
    const comparedNumber = compareBoard(targetBoard);

    answer.push(comparedNumber);
  }
}

console.log(Math.min(...answer));