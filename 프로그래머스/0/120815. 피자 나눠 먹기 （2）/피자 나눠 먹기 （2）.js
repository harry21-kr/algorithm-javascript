function solution(n) {
    // 남기지않고 모두 같은 수의 피자를 먹어야함
    // n명은 동일한 숫자를 배정받아야함
    // 숫자는 6의 배수로 증가
    // 6을 n으로 나누었을때 나머지가 없어야한다
    let count = 1;
    while (1) {
        if (!(count * 6 % n)) {
            return count;
        }
        count++;
    }
}