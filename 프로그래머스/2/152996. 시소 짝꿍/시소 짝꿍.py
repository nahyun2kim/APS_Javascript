def solution(weights):
    answer = 0
    weight_list = [0 for _ in range(1001)]
    for weight in weights:
        weight_list[weight] += 1
    for i in range(100, 1001):
        weight = weight_list[i]
        if weight > 0:
            answer += weight * (weight - 1) // 2
            if i * 4 % 3 == 0 and i*4/3 <= 1000:
                answer += weight * weight_list[i*4//3]
            if i * 3 % 2 == 0 and i*3/2 <= 1000:
                answer += weight * weight_list[i*3//2]
            if i*2 <= 1000:
                answer += weight * weight_list[i*2]
            
    return answer