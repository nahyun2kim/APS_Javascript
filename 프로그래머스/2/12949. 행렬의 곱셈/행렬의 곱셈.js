function solution(arr1, arr2) {
    const n = arr1.length, k = arr1[0].length, m = arr2[0].length; // (n * k) * (k * m) -> (n * m)
    const answer = Array.from(new Array(n), () => new Array(m).fill(0));
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            let sum = 0;
            for (let h=0; h<k; h++) {
                sum += arr1[i][h] * arr2[h][j]
            }
            answer[i][j] = sum
        }
        
    }
    return answer;
}