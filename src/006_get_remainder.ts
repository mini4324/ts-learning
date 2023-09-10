/*
 * 二つの数値を受け取り、割ったあまりを返す関数
 */
export function getRemainder() {}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('getRemainder', () => {
    expect(getRemainder(7, 2)).toBe(1);
    expect(getRemainder(15, 3)).toBe(0);
    expect(getRemainder(17, 5)).toBe(2);
  });
}
