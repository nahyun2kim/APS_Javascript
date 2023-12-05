function solution(food) {
    let answer = '';
    food.forEach((v, i) => answer += (''+i).repeat(parseInt(v/2)))
    return answer + '0' + answer.split('').reverse().join('');
}