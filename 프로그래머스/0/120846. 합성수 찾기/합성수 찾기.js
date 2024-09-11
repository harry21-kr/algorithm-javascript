function solution(n) {
    let answer = 0;
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count = 1;
        for (let j = 1; j <= i; j++) {
            if (count === 3) {
                answer++;
                count = 0;
                break;
            }
            if (!(i % j)) {
                count++;
            }
        }
    }
    return answer;
}