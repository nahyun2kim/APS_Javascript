function solution(s, n) {
    const sm = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    return s.split(' ').map(t=>t.split('').map(v=>{
        if(v.charCodeAt() >= 97) { // 소문자라면
            return sm[sm.indexOf(v)+n];
        }
        return sm[sm.indexOf(v.toLowerCase())+n].toUpperCase();
    }).join('')).join(' ');
}