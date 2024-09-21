function solution(spell, dic) {
    return dic.map((v)=>v.split("").sort().join("")).includes(spell.sort().join("")) ? 1 : 2;
}