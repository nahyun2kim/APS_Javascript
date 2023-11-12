function solution(n) {
    const mod = n%2 === 1 ? '수' : ''
    return '수박'.repeat(parseInt(n/2)) + mod;
}