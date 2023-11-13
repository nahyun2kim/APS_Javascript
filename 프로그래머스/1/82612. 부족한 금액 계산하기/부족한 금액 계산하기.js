function solution(price, money, count) {
    const cost = price * (count) * (count + 1) / 2
    return cost <= money ? 0 : cost - money;
}