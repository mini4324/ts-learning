/*
 * 二つの数値を受け取り、その商を返す関数
 */
export function devides() {}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('devides', () => {
    expect(devides(4, 2)).toBe(2);
    expect(devides(12, 3)).toBe(4);
    expect(devides(-8, 2)).toBe(-4);
  });
}
