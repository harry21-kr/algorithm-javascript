function solution(n, control) {
    const strArr = control.split("");
    let answer = n;
    let count = 0;
    while (count !== strArr.length) {
        switch (strArr[count]) {
            case "w" : answer++; break;
            case "s" : answer--; break;
            case "d" : answer += 10; break;
            case "a" : answer -= 10; break;
        }
        count++;
    }
    return answer;
}