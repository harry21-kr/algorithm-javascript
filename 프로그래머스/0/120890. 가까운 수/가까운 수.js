function solution(array, n) {
    let answer = array[0];
    for (let i = 1; i < array.length; i++) {
        if (Math.abs(n - array[i]) < Math.abs(n - answer)) {
            answer = array[i];
        } else if (Math.abs(n - array[i]) === Math.abs(n - answer) && array[i] < answer) {
            answer = array[i];
        }
    }
    return answer;
}