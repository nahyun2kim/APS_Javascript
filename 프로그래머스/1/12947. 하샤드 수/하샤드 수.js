function solution(x) {
    //1. 자릿수의 합 구하기
    const sum = (x+'').split('').map(v=>+v).reduce((a,b)=>a+b)
    //2. 하샤드의 수인지 확인 (나누어떨어지는지)
    return x%sum === 0;
}