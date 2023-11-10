function solution(absolutes, signs) {
    let answer = 0;
    absolutes.map((v, i)=>{answer += signs[i] ? v : -v})
    return answer;
}