function solution(quiz) {
    return quiz.map((v) => a(v) ? "O" : "X");
}

function a (v) {
    const arr = v.split(" ");
    return arr[1] === "+" ? +arr[0] + +arr[2] === +arr[4] : +arr[0] - +arr[2] === +arr[4];
}