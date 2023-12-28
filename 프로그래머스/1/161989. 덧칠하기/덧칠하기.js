function solution(n, m, section) {
    const paint = [];
    section.forEach(v=>{
        if(paint.length === 0 || paint[0] < v) paint.unshift(v+m-1);
    })
    return paint.length;
}