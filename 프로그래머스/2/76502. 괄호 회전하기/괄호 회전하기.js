const partner = {')': '(', '}': '{', ']': '['};
const isRight = (str) => {
    const st = [];
    let flag = true;
    for (let i=0; i<str.length; i++) {
        const v = str[i]
        if(partner.hasOwnProperty(v)) {
            if(st.length !== 0 && st[st.length-1] === partner[v]) st.pop();
            else {
                flag = false;
                break
            }
        } else {
            st.push(v)
        }
    }
    return flag && st.length === 0;
}
function solution(s) {
    let answer = 0;
    const l = s.length;
    s = s.repeat(2);
    for(let i=0; i<l; i++) {
        if(isRight(s.slice(i, i+l))) answer++;
    }
    return answer;
}