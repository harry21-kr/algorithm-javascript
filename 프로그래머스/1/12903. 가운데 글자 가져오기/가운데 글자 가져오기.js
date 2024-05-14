function solution(s) {
    const sArr = s.split("");
    if (sArr.length % 2) {
        return sArr[Math.floor(sArr.length / 2)];
    } else {
        return `${sArr[sArr.length / 2 - 1]}${sArr[sArr.length / 2]}`
    }
}