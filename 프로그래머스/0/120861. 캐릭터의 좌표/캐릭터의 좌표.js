function solution(keyinput, board) {
    let answer = [0,0];
    const max = [--board[0] / 2, --board[1] / 2];
    keyinput.forEach((key) => {
        if (key === "left" && -max[0] < answer[0]) {
            answer = [answer[0] - 1, answer[1]]
        } else if (key === "right" && max[0] > answer[0]) {
            answer = [answer[0] + 1, answer[1]]
        } else if (key === "up" && max[1] > answer[1]) {
            answer = [answer[0], answer[1] + 1]
        } else if (key === "down" && -max[1] < answer[1]) {
            answer = [answer[0], answer[1] - 1]
        }
    })
    return answer;
}