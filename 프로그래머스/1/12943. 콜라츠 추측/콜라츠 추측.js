function solution(num) {
    if(num === 1) return 0;
    let cnt = 0;
    while (cnt++ < 500) {
        num % 2 === 0 ? num /= 2 : num = 3*num + 1
        if(num === 1) return cnt;
    }
    return -1;
}