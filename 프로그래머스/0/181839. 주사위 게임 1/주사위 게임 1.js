function solution(a, b) {
    return a % 2 && b % 2 ? a * a + b * b : !(a % 2) && !(b % 2) ? Math.abs(a - b) : (a + b) * 2;
}