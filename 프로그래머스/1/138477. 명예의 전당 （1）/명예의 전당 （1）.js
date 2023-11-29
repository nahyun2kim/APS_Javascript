function solution(k, score) {
    const answer = [];
    const hall = [];
    score.forEach(s=>{
        if (hall.length < k) hall.push(s)
        else if (hall[k-1] < s) hall[k-1] = s
        hall.sort((a,b)=>b-a) // 내림차순 정렬
        answer.push(hall[hall.length - 1])
    })
    return answer;
}