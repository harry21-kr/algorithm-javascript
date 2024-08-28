function solution(my_string, num1, num2) {
    const strA = my_string[num1];
    const strB = my_string[num2];
    const answer = my_string.split("");
    answer.splice(num1, 1, strB);
    answer.splice(num2, 1, strA);
    return answer.join("");
}