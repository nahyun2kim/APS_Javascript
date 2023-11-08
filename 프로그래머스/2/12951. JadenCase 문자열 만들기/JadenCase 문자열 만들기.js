function solution(s) {
    return s.split(' ')
        .map(v=>v.split('')
             .map((val, idx) => idx ? val.toLowerCase() : val.toUpperCase()).join(''))
        .join(' ');
}