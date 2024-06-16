function solution(array) {
    console.log(array.sort());
    return array.sort((a,b) => a - b)[Math.floor(array.length / 2)];
}