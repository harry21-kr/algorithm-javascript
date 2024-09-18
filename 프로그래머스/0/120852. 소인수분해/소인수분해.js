function solution(n) {
    const answer = [];
    let num = n;
    let count = 2;
    while (num !== 1) {
        if (num % count === 0) {
            num /= count;
            if (!answer.includes(count)) {
              answer.push(count);    
            }
            continue;
        }
        
        count++;
    }
    return answer;
}