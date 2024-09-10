function solution(numbers, direction) {
    const answer = numbers;
    if (direction === "right") {
        const rightArg = answer.pop();
        return [rightArg, ...numbers];
    } else {
        const leftArg = answer.shift();    
        return [...numbers, leftArg];
    }
}