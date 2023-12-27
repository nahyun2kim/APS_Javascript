function solution(answers) {
    // 1. 문제 정답 배열 생성
    const ans = ['12345', '21232425', '3311224455']
    
    // 2. 입력받은 answers 돌면서 몇개의 정답을 맞췄는지 확인
    let count = ans.map(v => answers.reduce((a, c, i)=> c == v[i%v.length] ? a+1 : a, 0))
    
    // 3. 정답의 개수와 몇 번의 수포자인지 저장 후 정답의 개수 desc, 번호 asc로 정렬
    count = count.map((v, i)=> [v, i+1]).sort((a, b)=> a[0] - b[0] === 0 ? a[1] - b[1] : b[0] - a[0])
    
    // 4. 가장 많은 문제를 맞힌 사람 반환
    return count.filter(v => v[0] === count[0][0]).map(a=>a[1])
}