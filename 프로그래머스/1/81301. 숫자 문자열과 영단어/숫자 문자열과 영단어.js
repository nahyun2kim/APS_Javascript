function solution(s) {
    const idx = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    idx.forEach((v, i) => { s = s.replaceAll(v, i) })
    return +s;
}