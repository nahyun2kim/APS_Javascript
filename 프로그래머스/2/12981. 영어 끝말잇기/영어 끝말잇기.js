function solution(n, words) {
    let st = words[0][0];
    const set = new Set();
    for (let i=0; i<words.length; i++) {
        if (words[i][0] === st && !set.has(words[i])) {
            st = words[i][words[i].length - 1];
            set.add(words[i]);
        } else {
            const div = parseInt(i/n) + 1;
            const mod = i % n + 1
            return [mod, div]
        }
    }
    return [0, 0];
}