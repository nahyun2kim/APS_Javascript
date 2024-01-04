function solution(numbers) {
    const answer = [];
    numbers.sort((a,b)=>a-b);
    numbers.forEach((v,i)=>{
        numbers.slice(i+1, numbers.length).forEach(w=>answer.push(v+w))
    })
    return [...new Set(answer)].sort((a,b)=>a-b);
}