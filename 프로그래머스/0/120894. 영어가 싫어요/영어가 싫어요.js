function solution(numbers) {
    const obj = {
        zero: "0",
        one : "1",
        two : "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9"
    };
    let str = "";
    let answer = "";
    for (let i = 0; i <= numbers.length; i++) {
        if (Object.keys(obj).includes(str)) {
            answer += obj[str];
            str = "";
        }
        
        str += numbers[i];
    }
    return +answer;
}