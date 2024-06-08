function solution(num_list) {
    var answer = [];
    let oddCount = 0;
    let evenCount = 0;
    num_list.forEach((v) => {if(v % 2) { oddCount++ } else {evenCount++}})
    return [evenCount,oddCount];
}