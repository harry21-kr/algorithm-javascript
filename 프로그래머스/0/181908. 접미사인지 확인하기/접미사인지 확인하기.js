function solution(my_string, is_suffix) {
    const arr = my_string.split("");
    const compareArr = [];
    for (let i = 0; i < my_string.length; i++) {
        compareArr.push(arr.join(""));
        arr.shift();
    }
    return compareArr.includes(is_suffix) ? 1 : 0;
}