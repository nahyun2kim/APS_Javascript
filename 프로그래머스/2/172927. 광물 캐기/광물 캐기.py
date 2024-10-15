import math

def solution(picks, minerals):
    l = len(minerals)
    mineral_info = []
    for i in range(0, min(l, sum(picks)*5), 5):
        hard = []
        for x in range(i, i+5 if i+5 <= l else l):
            if minerals[x] == 'diamond':
                hard.append(25)
            elif minerals[x] == 'iron':
                hard.append(5)
            else:
                hard.append(1)
        mineral_info.append(hard)
    mineral_info.sort(key = lambda x: sum(x), reverse=True)
    
    answer = 0
    for mineral in mineral_info:
        if picks[0] > 0:
            picks[0] -= 1
            answer += sum([math.ceil(item / 25) for item in mineral])
        elif picks[1] > 0:
            picks[1] -= 1
            answer += sum([math.ceil(item / 5) for item in mineral])
        elif picks[2] > 0:
            picks[2] -= 1
            answer += sum(mineral)
    return answer