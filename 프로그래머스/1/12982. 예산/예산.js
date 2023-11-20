function solution(d, budget) {
    let sum = 0;
    d.sort((a,b)=>a-b);
    for (let i=0; i<d.length; i++) {
        if(sum + d[i] > budget) return i;
        sum += d[i]
    }
    return d.length;
}