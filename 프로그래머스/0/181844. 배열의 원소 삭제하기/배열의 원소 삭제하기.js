function solution(arr, delete_list) {
    let answerArr = arr;
    for (let i = 0; i < delete_list.length; i++) {
        if (arr.includes(delete_list[i])) {
            answerArr = answerArr.filter((v) => v !== delete_list[i]);
        }
    }
    return answerArr;
}