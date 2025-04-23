function solution(k, m, score) {
    const sortedAppleBox = score.sort((a,b) => b - a);
    
    let answer = 0;
    
    let count = 0;
    let pointer = 0;
    
    while (count < parseInt(sortedAppleBox.length / m)) {
        const arr = sortedAppleBox.slice(pointer, pointer + m);
        answer += Math.min(...arr) * m;
        pointer += m;
        count++;
    }
    
    return answer;
}