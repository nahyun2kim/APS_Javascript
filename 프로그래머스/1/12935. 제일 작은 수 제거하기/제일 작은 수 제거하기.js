function solution(arr) {
    const idx = arr.indexOf(Math.min(...arr));
    arr.splice(idx, 1)
    return arr.length ? arr : [-1];
}