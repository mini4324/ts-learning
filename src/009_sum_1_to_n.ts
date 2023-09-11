/*
 * 数値を一つ受け取り、1からその数値までの合計を返す関数
 */
/*export function sumOneToN(a: number) {
  let total = 0;
  total = ((1 + a) * a) / 2;
  return total;
}*/
/*上は公式の感じで思いついたもの*/

export function sumOneToN(a: number) {
  let total = 0;
  for (let b = 0; b < a; b++) {
    total += b + 1;
  }
  return total;
}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("sumOneToN", () => {
    expect(sumOneToN(3)).toBe(6);
    expect(sumOneToN(10)).toBe(55);
  });
}
