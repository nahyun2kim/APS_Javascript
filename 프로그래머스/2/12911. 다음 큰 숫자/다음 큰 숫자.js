const cntOne = (n) => n.toString(2).split('').filter(v=>v==='1').length;

function solution(n) {
    const cnt = cntOne(n);
    while (cntOne(++n) !== cnt) {}
    return n
}