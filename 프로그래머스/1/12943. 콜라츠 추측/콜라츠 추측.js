function solution(num) {
    let answer = 0;
    let count = num;
    while (1) {
        if (answer === 500) {
            answer = -1;
            break;
        } else if (count === 1) {
            break;
        }
        
        if (count % 2) {
            count = count * 3 + 1;
            answer++;
        } else {
            count /= 2;
            answer++;
        }
    }
    return answer;
}