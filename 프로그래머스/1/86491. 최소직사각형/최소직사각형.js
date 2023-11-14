function solution(sizes) {
    let min = -Infinity;
    let max = -Infinity;
    for (let i=0; i<sizes.length; i++) {
        sizes[i].sort((a,b)=>a-b);
        min = Math.max(min, sizes[i][0]);
        max = Math.max(max, sizes[i][1]);
    }
    return min * max;
}