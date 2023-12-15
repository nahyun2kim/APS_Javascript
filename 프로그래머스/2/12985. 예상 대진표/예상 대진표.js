function solution(n,a,b) {
    let answer = 1;
    while ((Math.floor((a-1)/2)+1) !== (Math.floor((b-1)/2)+1)) {
        answer++;
        a = Math.floor((a-1)/2) + 1;
        b = Math.floor((b-1)/2) + 1;
    }
    return answer;
}