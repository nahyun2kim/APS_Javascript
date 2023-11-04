function solution(x, n) {
    let answer = [];
    //1. 반복문 작성
    let num = x
    while (answer.length < n) {
        answer.push(num)
        num += x
    }
    //2. 출력
    return answer;
}