function solution(n, left, right) {
    const arr = [];
    for (let i=left; i<right+1; i++) {
        const r = parseInt(i/n) + 1;
        const c = i%n;
        arr.push(c < r ? r : c+1);
    }
    return arr;
}