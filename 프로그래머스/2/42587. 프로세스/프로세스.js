function solution(priorities, location) {
    const sortList = [...priorities].sort((a, b) => a - b);
    let answer = 0;
    let complete = 0;
    priorities = priorities.map((v, i) => [v, i]);
    while (answer === 0) {
        const [value, index] = priorities.shift();
        if (value === sortList[sortList.length - 1]) {
            if (index === location) answer =  complete + 1;
            complete++;
            sortList.pop();
        } else {
            priorities.push([value, index]);
        }
    }
    return answer;
}