function solution(name, yearning, photo) {
    return photo.map(v => 
        [...v].reduce((a, b) => {
            const idx = name.indexOf(b);
            return idx === -1 ? a : a + yearning[idx]
        }, 0)
    );
}