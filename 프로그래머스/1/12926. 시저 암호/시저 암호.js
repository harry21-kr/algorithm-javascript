function solution(s, n) {
    const newArr = s.split("").map( v => {
        let isUpper = false;
        const converted = v.charCodeAt();
        if (65 <= converted && converted <= 90) {
            isUpper = true;
        }
        if (isUpper && converted + n > 90) {
            return String.fromCharCode(converted + n - 26);
        } else if (!isUpper && converted + n > 122) {
            return String.fromCharCode(converted + n - 26);
        }
        
        return converted === 32 ? String.fromCharCode(converted) : String.fromCharCode(converted + n);
    });
    
    return newArr.join("");
}