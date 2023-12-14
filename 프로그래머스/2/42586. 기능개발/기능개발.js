function solution(progresses, speeds) {
    const workingDay = progresses.map((v, i)=>parseInt((99-v)/speeds[i])+1);
    const answer = [];
    const st = [];
    workingDay.forEach(v => {
        if (st.length !== 0 && st[0] < v) {
            answer.push(st.length);
            st.length = 0;
        }
        st.push(v);
    });
    answer.push(st.length);
    return answer;
}