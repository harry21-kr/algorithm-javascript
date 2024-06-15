function solution(array, height) {
    let count = 0;
    array.forEach((v) => {if (v > height) {count++;}})
    return count;
}