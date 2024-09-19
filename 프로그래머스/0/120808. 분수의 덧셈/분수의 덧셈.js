function solution(numer1, denom1, numer2, denom2) {
    let denom = denom1 * denom2;
    let numer = numer1 * denom2 + numer2 * denom1;
    let div = 2;
    while (1) {
        if (div > Math.max(denom, numer)) {
            break;
        }
        if (denom % div || numer % div) {
            div++;
            continue;
        }
        denom /= div;
        numer /= div;
    }
    const arr = [numer, denom];
    return arr;
}