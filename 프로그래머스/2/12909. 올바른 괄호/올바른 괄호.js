function solution(s){
    let st = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') st+=1;
        else {
            if (st > 0) st-=1;
            else return false;
        }
    }
    return st === 0 ? true : false;
}