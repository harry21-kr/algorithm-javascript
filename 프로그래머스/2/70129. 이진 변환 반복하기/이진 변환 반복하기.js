function solution(s) {
    var answer = [];
    let prevStr = s;
    let newStr = "";
    let zeroCount = 0;
    let transformCount = 0;
    
    while (1) {
        newStr = prevStr.replaceAll("0","");
        zeroCount += prevStr.length - newStr.length;
        
        prevStr = Number(newStr.length).toString(2);
        transformCount++;
        
        if (prevStr === "1") {
            break;
        }
    }

    return [transformCount,zeroCount];
}