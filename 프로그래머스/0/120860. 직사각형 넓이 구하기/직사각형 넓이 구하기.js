function solution(dots) {
    var answer = 0;
    const minX = Math.min(...dots.map((arr)=>arr[0]));
    const maxX = Math.max(...dots.map((arr)=>arr[0]));
    const minY = Math.min(...dots.map((arr)=>arr[1]));
    const maxY = Math.max(...dots.map((arr)=>arr[1]));
    const x = minX > 0 ? maxX - minX : maxX + Math.abs(minX);
    const y = minY > 0 ? maxY - minY : maxY + Math.abs(minY);
    return x * y;
}