function solution(s){
    const l = s.length;
    const count_p = l - s.replace(/p/gi, '').length;
    const count_y = l - s.replace(/y/gi, '').length;
    return count_p === count_y;
}