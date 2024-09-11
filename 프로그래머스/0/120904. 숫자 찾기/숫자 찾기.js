function solution(num, k) {
    const answer = num.toString().split("").findIndex((v) => v == k)
    return answer !== -1 ? answer + 1 : -1;
}