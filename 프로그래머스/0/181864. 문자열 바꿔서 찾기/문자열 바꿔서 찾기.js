function solution(myString, pat) {
    return myString.split("").map((v) => {if (v === "A") {return "B"} else {return "A"}}).join("").includes(pat) ? 1 : 0;
}