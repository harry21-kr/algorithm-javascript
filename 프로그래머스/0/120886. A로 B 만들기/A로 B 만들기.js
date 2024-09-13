function solution(before, after) {
    const beforeArr = before.split("").sort().join("");
    const afterArr = after.split("").sort().join("");
    return beforeArr === afterArr ? 1 : 0;
}