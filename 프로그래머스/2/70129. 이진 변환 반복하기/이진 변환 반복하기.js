const removeZero = n => {
    if(n.indexOf('0') === -1) return [n.length.toString(2), 0];
    const zeroCnt = n.match(/0/g).length;
    return [(n.length - zeroCnt).toString(2), zeroCnt];
}

function solution(s) {
    let answer = 0;
    let cnt = 0;
    s = s.toString(2);
    while (s !== '1') {
        cnt++;
        const tmp = removeZero(s);
        s = tmp[0];
        answer += tmp[1];
    }
    return [cnt, answer];
}