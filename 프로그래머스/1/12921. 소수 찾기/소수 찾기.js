function solution(n) {
    const prime = Array(n+1).fill(false);
    for (let i=2; i<=n; i++) {
        if (prime[i] === true) continue;
        for(let j=2*i; j<=n; j+=i) prime[j] = true;
    }
    return prime.slice(2, n+1).reduce((a,c)=>a+(c === false), 0);
}