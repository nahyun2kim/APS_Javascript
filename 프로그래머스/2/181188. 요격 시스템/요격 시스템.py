def solution(targets):
    answer = 0
    boom = 0
    for st, ed in sorted(targets):
        if st < boom:
            boom = min(boom, ed)
        else:
            answer += 1
            boom = ed
    return answer