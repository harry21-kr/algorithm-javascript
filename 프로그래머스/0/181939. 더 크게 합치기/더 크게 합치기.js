function solution(a, b) {
    const caseOne = Number(a.toString() + b.toString());
    const caseTwo = Number(b.toString() + a.toString());
    return caseOne > caseTwo ? caseOne : caseTwo;
}