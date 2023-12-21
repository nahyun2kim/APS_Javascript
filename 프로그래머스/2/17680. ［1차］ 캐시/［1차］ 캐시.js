function solution(cacheSize, cities) {
    cities = cities.map(v => v.toUpperCase());
    const cache = [];
    return cities.reduce((a, c)=>{
        const idx = cache.indexOf(c);
        cache.push(c)
        idx < 0 ? (cache.length > cacheSize && cache.shift()) : cache.splice(idx, 1);
        return a + (idx < 0 ? 5 : 1);
    }, 0);
}