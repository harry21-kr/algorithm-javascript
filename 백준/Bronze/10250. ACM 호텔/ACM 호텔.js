const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
for (let i = 1; i <= +input[0]; i++) {
  const arr = input[i].split(" ");
  const maxFloor = arr[0];
  let floor = 1;
  let room = 1;
  for (let i = 1; i < arr[2]; i++) {
    if (floor + 1 > maxFloor) {
      room++;
      floor = 1;
      continue;
    }
    floor++;
  }
  console.log(
    `${floor}${room.toString().length > 1 ? room : "0" + room.toString()}`
  );
}
