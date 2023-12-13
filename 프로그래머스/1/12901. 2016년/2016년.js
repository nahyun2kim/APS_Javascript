function solution(a, b) {
    const day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    const monthDay = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day[(monthDay.slice(0, a).reduce((a, c)=>a+c)+b)%7];
}