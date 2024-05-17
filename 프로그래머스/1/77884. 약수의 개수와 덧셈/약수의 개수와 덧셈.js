function solution(left, right) {
    let number = 0; 
    for (let i = left; i <= right; i++) {
        const arr = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                arr.push(j);
            }
        }
        arr.length % 2 ? number -= i : number += i
    }
    return number;
}