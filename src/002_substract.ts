/*
 * 二つの数値を受け取り、その差を返す関数
 */
export function substract() {}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('substract', () => {
    expect(substract(1, 1)).toBe(0);
    expect(substract(1, 0)).toBe(1);
    expect(substract(0, 1)).toBe(-1);
    expect(substract(5, 3)).toBe(2);
  });
}
