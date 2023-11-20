function solution(n, m) {
    const answer = [0, 0];
    for (let i=Math.min(n, m); i>0; i--) {
        if(n % i === 0 && m % i === 0) {
            answer[0] = i;
            break;
        }
    }
    answer[1] = n * m / answer[0]
    return answer;
}