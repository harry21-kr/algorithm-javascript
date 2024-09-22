function solution(array) {
    const obj = array.reduce((acc, cur)=> ({...acc, [cur]: acc[cur] ? acc[cur] + 1 : 1}), {});
    const max = Math.max(...Object.values(obj));
    const key = Array.from(Object.keys(obj));
    const answer = key.filter((v)=> obj[v] === max);
    return answer.length > 1 ? -1 : Number(answer[0]);
}