/*
 * 文字列と数値（仮にnと置く）を受け取り、文字数がnより長い場合はtrue、そうでない場合はfalseを返す関数
 */
export function isStringLongerThanN(a: string, n: number) {
  if (a.length > n) {
    return true;
  } else {
    return false;
  }
}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("isStringLongerThanN", () => {
    expect(isStringLongerThanN("string", 10)).toBe(false);
    expect(isStringLongerThanN("helloworld", 10)).toBe(false);
    expect(isStringLongerThanN("helloworld!", 10)).toBe(true);
    expect(isStringLongerThanN("helloworld!", 11)).toBe(false);
  });
}
