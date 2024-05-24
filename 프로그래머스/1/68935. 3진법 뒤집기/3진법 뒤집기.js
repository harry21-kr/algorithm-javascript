function solution(n) {
    const BASE = 3;
    let convertedNumber = "";
    let div = n;
    let count = 0;
    let answer = 0;
    while (1) {
        convertedNumber += (div % BASE);
        
        count++;
        
        div = Math.floor(div / BASE);
        
        if (!div) {
            break;
        }
    }
    for (let i = 0; i < convertedNumber.length; i++) {
        answer += Number(convertedNumber.split("").reverse()[i]) * Math.pow(BASE, i);
        console.log(convertedNumber[i], answer, i);
    }
    return answer;
}