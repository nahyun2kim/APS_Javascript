function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    while (people.length) {
        answer++;
        const w = people.pop();
        if (people.length && w + people[0] <= limit) people.shift();
    }
    return answer;
}