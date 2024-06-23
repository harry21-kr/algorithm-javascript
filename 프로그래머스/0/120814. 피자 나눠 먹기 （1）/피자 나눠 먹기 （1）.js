function solution(n) {
    let count = 1;
    const MAX = 7;
    while (1) {
        if ((count * MAX) / n < 1) {
            count++;
            continue;
        }
        break;
    }
    return count;
}