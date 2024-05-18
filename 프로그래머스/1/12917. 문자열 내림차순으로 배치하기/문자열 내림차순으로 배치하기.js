function solution(s) {
  const newArr = s
    .split("")
    .map((v) => v.charCodeAt())
    .sort((a, b) => b - a)
    .map((v) => String.fromCharCode(v))
    .join("");
  return newArr;
}
