function solution(s) {
    return s.split(' ').map(a=>{
        let text = '';
        a.split('').forEach((v, i)=>{
            text += i%2 === 0 ? v.toUpperCase() : v.toLowerCase()
        });
        return text;
    }).join(' ')
}