function solution(emergency) {
    const arr = [...emergency].sort((a,b) => b - a);
    return emergency.map((v, idx)=> arr.indexOf(v) + 1);
}