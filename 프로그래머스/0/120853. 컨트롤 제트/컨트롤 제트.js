function solution(s) {
    return s.split(" ").reduce((acc, cur, idx, src) => !isNaN(+cur) ? acc + +cur :  acc - +src[idx - 1],0);
}