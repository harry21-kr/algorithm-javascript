function solution(my_string) {
    const vowels = ["a", "e", "i", "o", "u"];
    return my_string.split("").filter((v) => !vowels.includes(v)).join("");
}