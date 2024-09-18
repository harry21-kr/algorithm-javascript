function solution(numbers, k) {
    let idx = 0;
    let count = 0;
    while (1) {
        count++;
        
        if (count === k) {
            break;
        }
        
        idx += 2;
        
        if (idx > numbers.length) {
            idx -= numbers.length;
        }
    }
    
    return numbers[idx];
}