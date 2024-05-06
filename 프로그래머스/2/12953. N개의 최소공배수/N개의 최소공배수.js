const lcm = (a, b) => {
    let res = Math.max(a, b);
    while (true) {
        if (res % a === 0 && res % b === 0) return res;
        res++;
    }
}

function solution(arr) {
    return arr.reduce((a, c) => lcm(a, c), 1);
}