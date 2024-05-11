function solution(phone_number) {
    return phone_number.split("").reverse().map((v, idx)=> idx > 3 ? "*" : v).reverse().join("");
}