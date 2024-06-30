function solution(str) {
    return str.split("").filter((v)=> !isNaN(+v)).reduce((acc,cur) => acc + +cur, 0);
}