function solution(n) {
    const a = Number(n).toString(2).split("").filter((v)=> v === "1").length;
    let answer = Number(n);
    
    while (1) {
        answer += 1;
        
        if (answer.toString(2).split("").filter((v)=> v === "1").length === a) {
            break;
        }
    }
    
    return answer;
}