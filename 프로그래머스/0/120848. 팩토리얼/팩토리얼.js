function solution(n) {
    let num = 1;
    let count = 1;
    while (1) {
        num *= count;
        if (num > n) {
            return count - 1;
        }
        count++;
    }
}