const solution = (triangle) => {
    const dp = [];
    triangle.map((row, x)=>{
        const r = row.map((col, y)=>{
            if (x === 0) return col;
            const left = dp[x-1][y-1] ?? 0;
            const right = dp[x-1][y] ?? 0;
            return Math.max(left, right) + triangle[x][y];
        })
        dp.push(r);
    })
    return Math.max(...dp[dp.length - 1]);
}