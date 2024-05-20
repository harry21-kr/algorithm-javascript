function solution(str) {
    if (str.length !== 4 && str.length !== 6) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            return false;
        }
    }
    return true;
}