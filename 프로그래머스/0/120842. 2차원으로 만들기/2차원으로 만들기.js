function solution(num_list, n) {
    const answer = [];
    let count = n;
    while (1) {
        if (count > num_list.length) {
            break;
        }
        
        answer.push(num_list.slice(count - n, count));
        count += n;
    }
    return answer;
}