const count = (n) => {
    let cnt = 0;
    for (let i=1; i<Math.sqrt(n); i++) {
        if(n % i === 0) cnt++;
    }
    return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? 2*cnt+1 : 2*cnt;
}

function solution(left, right) {
    let answer = 0;
    for (let i=left; i<=right; i++) {
        const cnt = count(i)
        cnt % 2 === 0 ? answer += i : answer -= i
    }
    return answer;
}