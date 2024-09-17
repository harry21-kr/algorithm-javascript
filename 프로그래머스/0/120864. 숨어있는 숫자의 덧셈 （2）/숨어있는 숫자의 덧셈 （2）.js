function solution(my_string) {
    let sum = 0;
    let cashedNumber = "";
    for (let i = 0; i < my_string.length; i++) {
        if (!isNaN(+my_string[i])) {
            cashedNumber += my_string[i];
            if (!isNaN(+my_string[i + 1])) {
                continue;
            }
            sum += +cashedNumber;
            cashedNumber = "";
        }
    }
    return sum;
}