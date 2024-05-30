function solution(s) {
    const MAPPING = {
        zero : 0,
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven : 7,
        eight: 8,
        nine: 9
    };
    let str = "";
    let answer = "";
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            str += s[i];
            if (Object.keys(MAPPING).includes(str)) {
                answer += MAPPING[str];
                str = "";
            }
        } else {
            answer += s[i];    
        }
    }
    
    return Number(answer);
    ;
}