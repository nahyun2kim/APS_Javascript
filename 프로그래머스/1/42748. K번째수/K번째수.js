function solution(array, commands) {
    const answer = [];
    commands.forEach(v=>{
        const [i, j, k] = v;
        answer.push(array.slice(i-1, j).sort((a,b)=>a-b)[k-1]);
    })
    return answer;
}