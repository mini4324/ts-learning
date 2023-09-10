/*
 * テストが通るように実装をしてください
 * 以下の関数は2つの数値を受け取り、その合計を返す関数です
 */
export function addTwoNumbers(a: number, b: number) {
  return a + b;
}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("addTwoNumbers", () => {
    expect(addTwoNumbers(1, 1)).toBe(2);
    expect(addTwoNumbers(1, 0)).toBe(1);
    expect(addTwoNumbers(123, 123)).toBe(246);
  });
}
