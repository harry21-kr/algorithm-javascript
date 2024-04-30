function solution(x, n) {
    const arr = Array.from({length: n});
    return arr.map((_,idx) => x * (idx + 1));
}