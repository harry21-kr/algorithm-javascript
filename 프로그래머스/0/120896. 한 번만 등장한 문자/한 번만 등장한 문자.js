function solution(s) {
    const sortedArr = s.split("").sort();
    return sortedArr.filter((v,idx)=>sortedArr.indexOf(v) === sortedArr.lastIndexOf(v) && v).join("");
}