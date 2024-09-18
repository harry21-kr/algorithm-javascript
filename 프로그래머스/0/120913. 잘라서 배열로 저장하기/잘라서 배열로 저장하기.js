function solution(my_str, n) {
    const answer = [];
    let count = 0;
    while (1) {
        if (count >= my_str.length) {
            break;
        } 
        
        answer.push(my_str.slice(count, count + n));
        count += n;
    }
    return answer;
}