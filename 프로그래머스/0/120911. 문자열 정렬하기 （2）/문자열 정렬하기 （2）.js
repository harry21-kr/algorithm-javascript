function solution(my_string) {
    return my_string.toLowerCase().split("").sort((a,b) => a.charCodeAt() - b.charCodeAt()).join("");
}