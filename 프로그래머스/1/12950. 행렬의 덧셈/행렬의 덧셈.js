function solution(arr1, arr2) {
    return arr1.map((arr, idx)=>arr.map((v, i) => v+arr2[idx][i]))
}