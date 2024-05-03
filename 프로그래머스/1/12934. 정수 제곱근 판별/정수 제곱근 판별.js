function solution(n) {
    let answer = -1;
    for (let i = 1; i < n / 2; i++) {
        if (i * i === n) {
            answer = i + 1;
            break;
        } 
    }
    if (n === 1) {
        answer = 2;
    }
    return answer === -1 ? answer : answer * answer;
}