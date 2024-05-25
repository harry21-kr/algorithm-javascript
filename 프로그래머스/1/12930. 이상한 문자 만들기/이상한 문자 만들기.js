function solution(s) {
    const arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split('');
        for (let j = 0; j < word.length; j++) {
            if (j % 2 === 0) {
                word[j] = word[j].toUpperCase();
            } else {
                word[j] = word[j].toLowerCase();
            }
        }
        arr[i] = word.join('');
    }
    return arr.join(" ");
}