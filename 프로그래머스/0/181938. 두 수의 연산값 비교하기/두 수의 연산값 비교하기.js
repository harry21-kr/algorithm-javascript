function solution(a, b) {
    const add = Number(a.toString() + b.toString());
    const mul = 2 * a * b
    return add === mul ? add : add > mul ? add : mul;
}