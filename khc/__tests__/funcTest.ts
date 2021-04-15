function sum(a, b) {
  return a + b;
}

test('합 테스트가 성공일 경우 입니다.', () => {
  expect(sum(1, 2)).toBe(3);
});

test('합 테스트가 실패일 경우 입니다.', () => {
  expect(sum(1, 2)).toBe(4);
});
