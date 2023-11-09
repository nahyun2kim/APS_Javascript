function solution(a, b) {
    const minValue = Math.min(a, b);
    const maxValue = Math.max(a, b);
    return Array(maxValue-minValue+1).fill(0).map((v,i)=>maxValue-i).reduce((a,b)=>a+b);
}