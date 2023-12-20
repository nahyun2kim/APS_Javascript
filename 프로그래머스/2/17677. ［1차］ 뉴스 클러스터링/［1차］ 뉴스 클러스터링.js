const splitTwoThing = (str) => {   
    str = str.toUpperCase();
    const regex = /[^a-zA-Z]/g;
    return str
        .split("")
        .map((v, i) => i < str.length-1 ? v + str[i+1] : undefined)
        .filter(e => e && e.replace(regex, "").length === 2)
}

function solution(str1, str2) {
    const arr1 = splitTwoThing(str1);
    const arr2 = splitTwoThing(str2);    
    
    const set = new Set([...arr1, ...arr2]);
    let inter = 0
    let union = 0;
    set.forEach(x => {
        const exists1 = arr1.filter(y => x === y).length;
        const exists2 = arr2.filter(y => x === y).length;
        inter += Math.min(exists1, exists2);
        union += Math.max(exists1, exists2);
    });
    
    return union === 0 ? 65536 : Math.floor(inter / union * 65536);
}