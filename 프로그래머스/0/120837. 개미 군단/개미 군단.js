function solution(hp) {
    const a = parseInt(hp / 5);
    const b = parseInt((hp % 5) / 3);
    return a + b + (hp % 5) % 3;
}