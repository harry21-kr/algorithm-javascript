const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 3개의 연산 함수 실행
// 연산 함수 실행 후 결괏값이 1이 아닐 경우 3개의 연산 함수 모두 실행
// 결괏값이 1일 경우 메모리에 캐시
// 캐시된 결괏값 중 숫자가 가장 낮은 수 출력

// 종료 조건?
// 최초로 연산한 X의 결과가 1일때
// -> 최적의 해를 메모리에 저장

// 저장은 어느 로직에서?

// key를 받아오는 방법?
// 메모리에 캐시되어있는 결괏값일 경우
// -> 메모리에서 꺼내와서 사용?

// 이미 계산했던 연산들의 불필요한 반복을 줄어야함
// 어떤 방식으로 메모리에 저장?

// find 함수가 Calling 하는것이 아닌, solution 함수에서 Calling?

const solution = (N) => {
  const dp = new Array(N + 1).fill(0);
  dp[1] = 0; // 기본 케이스

  for (let i = 2; i <= N; i++) {
    // 1을 뺀 경우
    dp[i] = dp[i - 1] + 1;

    // 2로 나누어 떨어질 경우
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    // 3으로 나누어 떨어질 경우
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }

    // console.log(dp, i);
  }

  return dp[N];
};

console.log(solution(input[0]));