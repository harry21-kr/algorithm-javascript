function solution(age) {
    return age.toString().split("").map((v)=> String.fromCharCode(+v + 97)).join("");
}