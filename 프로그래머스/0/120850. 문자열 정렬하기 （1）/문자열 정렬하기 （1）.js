function solution(my_string) {
    const a = my_string.split("").filter((v)=> v === "0" ? "0" : +v).map((v)=> +v).sort((a,b)=> a - b);
    return a.length ? a : [0];
}