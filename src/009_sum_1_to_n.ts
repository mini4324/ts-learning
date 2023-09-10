/*
 * 数値を一つ受け取り、1からその数値までの合計を返す関数
 */
export function sumOneToN() {}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('sumOneToN', () => {
    expect(sumOneToN(3)).toBe(6);
    expect(sumOneToN(10)).toBe(55);
  });
}
