function solution(my_string) {
    let str = "";
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i].charCodeAt() >= 65 && my_string[i].charCodeAt() < 91 ) {
            str += String.fromCharCode(my_string[i].charCodeAt() + 32);
        } else {
            str += String.fromCharCode(my_string[i].charCodeAt() - 32);
        }
    }
    return str;
}