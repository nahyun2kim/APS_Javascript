function solution(n){
    return (n+'').split('').map((i)=>+i).reduce((a, b)=> a + b);
}