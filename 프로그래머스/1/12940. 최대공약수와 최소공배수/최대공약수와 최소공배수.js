function solution(n, m) {
    var answer = [];
    for (let i = Math.max(n,m); i >= 1; i--) {
        if (!(n % i) && !(m % i)) {
            answer.push(i);
            break;
        }
    }
    answer.push(n * m / answer[0]);
    
    return answer;
}