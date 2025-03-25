function solution(str_list, ex) {
    const reducedStrList = str_list.reduce((acc,cur) => {
        if (cur.includes(ex)) {
            return acc;
        }
        return acc + cur;
    },"");
    
    return reducedStrList;
}