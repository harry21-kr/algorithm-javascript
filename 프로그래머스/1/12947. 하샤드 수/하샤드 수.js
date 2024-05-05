function solution(x) {
    const arr = x.toString().split("");
    const reduce = arr.reduce((acc,cur)=> Number(acc) + Number(cur),0)
    if (x % reduce) {
        return false;
    } else {
        return true;
    }
}