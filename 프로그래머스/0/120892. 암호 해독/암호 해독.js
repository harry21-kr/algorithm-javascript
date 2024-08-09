function solution(cipher, code) {
    let str = "";
    let num = code;
    while (1) {
        if (!cipher[num - 1]) {
            break;
        }
        
        str += cipher[num - 1]
        num += code;
    }
    
    return str;
}