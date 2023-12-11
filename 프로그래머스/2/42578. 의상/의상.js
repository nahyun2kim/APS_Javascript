function solution(clothes) {
    const cloth = {};
    clothes.forEach(v => {
        const [_, type] = v;
        cloth[type] ? cloth[type] += 1 : cloth[type] = 1;
    });
    return Object.keys(cloth).reduce((a, c)=>a*(cloth[c]+1), 1) - 1;
}