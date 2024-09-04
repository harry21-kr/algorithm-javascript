function solution(array) {
    let answer = 0;
    array.forEach((v) => v.toString().split("").forEach((v2) => {if (v2 === "7") { answer++ }}))
    return answer;
}