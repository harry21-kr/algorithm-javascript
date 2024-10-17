function solution(num_list) {
    const square = num_list.reduce((acc, cur) => acc + cur,0);
    const mul = num_list.reduce((acc, cur) => acc * cur,1);
    console.log(square ** square);
    console.log(mul);
    return mul > Math.pow(square, 2) ? 0 : 1;
}