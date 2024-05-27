function solution(t, p) {
    var answer = 0;
    const newArr = t.split("");
    for (let i = 0; i <= t.length - p.length; i++) {
        if (+p >= +newArr.slice(i, p.length + i).join("")) {
            ++answer;
        }
    }
    return answer;
}