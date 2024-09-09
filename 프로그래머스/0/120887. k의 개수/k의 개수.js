function solution(i, j, k) {
    let arr = [];
    for (let x = i; x <= j; x++) {
        arr.push(...x.toString().split(""));
    }
    return arr.filter((v) => v == k).length;
}