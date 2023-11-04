function solution(s) {
    // 1. 저장할 최대값, 최소값
    let max = -Number.MAX_VALUE;
    let min = Number.MAX_VALUE;
    
    // 2. string -> array(정수로 변환)
    let arr = s.split(' ').map((n)=>parseInt(n))

    // 3. 배열 돌면서 비교
    for (let i=0; i<arr.length; i++) {
        max = Math.max(max, arr[i])
        min = Math.min(min, arr[i])
    }
    
    //4. 출력
    return min.toString() + ' ' + max.toString();
}