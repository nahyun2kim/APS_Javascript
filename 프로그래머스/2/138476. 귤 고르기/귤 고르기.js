function solution(k, tangerine) {
    const box = new Map();
    tangerine.forEach(t => {
        if (box.has(t)) box.set(t, box.get(t) + 1);
        else box.set(t, 1);
    })
    const boxArr = [...box].sort((a, b) => a[1] - b[1]);
    let count = 0;
    let answer = 0;
    while (count < k) {
        answer++;
        const [w, c] = boxArr.pop();
        count += c;
    }
    return answer;
}