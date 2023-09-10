/*
 * 二つの数値を受け取り、その商を返す関数
 * ただし、商が整数でない場合は小数点以下を切り捨てる
 */
export function devidesInt() {}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('devidesInt', () => {
    expect(devidesInt(6, 2)).toBe(3);
    expect(devidesInt(12, 5)).toBe(2);
    expect(devidesInt(-15, 2)).toBe(-8);
  });
}
