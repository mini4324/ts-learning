/*
 * 文字列を一つ受け取り、小文字を全て大文字にして返す関数を作成してください。
 * たとえば、'hello world' を渡したら 'HELLO WORLD' を返します。
 */
export function capitalize(a: string): string {
  return a.toUpperCase();
}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("capitalize", () => {
    expect(capitalize("string")).toBe("STRING");
    expect(capitalize("hello world")).toBe("HELLO WORLD");
    expect(capitalize("HeLlO WoRlD!")).toBe(capitalize("hElLo wOrLd!"));
  });
}
