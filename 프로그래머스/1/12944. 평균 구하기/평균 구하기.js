function solution(arr) {
    let answer = 0.0
    for (let i=0; i<arr.length; i++) {
        answer += arr[i]
    }
    return answer / arr.length;
}