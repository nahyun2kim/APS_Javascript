function solution(n) {
    let answer = 2;
    while (answer < n-1) {
        if(n % answer === 1) {
            return answer
        }
        answer += 1
    }
    return answer;
}