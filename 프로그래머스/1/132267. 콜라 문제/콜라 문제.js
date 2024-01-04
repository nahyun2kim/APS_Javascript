function solution(a, b, n) {
    let answer = 0;
    while (n >= a) {
        const div = parseInt(n / a) * b;
        n = n % a + div;
        answer += div;
    }
    return answer;
}