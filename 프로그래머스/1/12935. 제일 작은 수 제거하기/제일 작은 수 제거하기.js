function solution(arr) {
    const min = [...arr].sort((a,b) => a - b).find((_,idx)=> idx !== arr.length - 1);
    
    return arr.length > 1 ? arr.filter((v)=> v !== min) : [-1];
}