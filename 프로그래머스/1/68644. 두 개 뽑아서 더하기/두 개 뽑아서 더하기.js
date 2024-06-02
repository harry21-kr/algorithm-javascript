function solution(numbers) {
    const arr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (!arr.includes(numbers[i] + numbers[j])) {
                arr.push(numbers[i] + numbers[j]);
            }
        }
    }
    return arr.sort((a,b)=> a - b);
}