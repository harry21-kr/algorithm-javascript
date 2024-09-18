function solution(balls, share) {
    return Math.round(fac(balls) / (fac(balls - share) * fac(share)));
}

const fac = (num) => {
    let a = 1;
    for (let i = 1; i <= num; i++) {
        a *= i;
    }
    return a;
}