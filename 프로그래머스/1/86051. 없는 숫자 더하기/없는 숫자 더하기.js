function solution(numbers) {
    const TOTAL = 45;
    return TOTAL - numbers.reduce((acc,cur) => acc+cur ,0);
}