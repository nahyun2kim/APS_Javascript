function solution(n) {
    let result = 0;
    const range = [...Array(n)].map((v, i)=>i+1);
    range.map(v => {if (n % v === 0) result += v})
    return result;
}