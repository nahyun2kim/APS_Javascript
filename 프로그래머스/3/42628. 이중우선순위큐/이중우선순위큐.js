function solution(operations) {
    const priority = [];
    operations.forEach(v=>{
        const [status, num] = v.split(' ');
        if (status === 'I') {
            priority.push(parseInt(num));
            priority.sort((a,b)=>a-b);
        } else if (num === '-1' && priority.length > 0) {
            priority.shift();
        } else if (num === '1' && priority.length > 0) {
            priority.pop();
        }
    })
    return priority.length === 0 ? [0, 0] : [priority[priority.length - 1], priority[0]];
}