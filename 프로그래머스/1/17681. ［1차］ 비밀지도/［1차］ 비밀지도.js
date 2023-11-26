function solution(n, arr1, arr2) {
    return arr1.map((v, i)=>
                    (v|arr2[i])
                    .toString(2)
                    .replaceAll('1', '#')
                    .replaceAll('0', ' ')
                    .padStart(n, ' '));
}