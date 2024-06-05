function solution(s){
    let count = 0;
    for (let i in s) {
        if (s[i] === "(") {
            count++;
        } else {
            count--
        }
        
        if (count < 0) {
            return false;
        } 
    }
    
    return !count;
}