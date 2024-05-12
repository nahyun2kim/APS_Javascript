function solution(phone_book) {
    phone_book.sort();
    return !phone_book.some((val, idx, self) => self[idx + 1]?.indexOf(val) === 0);
}