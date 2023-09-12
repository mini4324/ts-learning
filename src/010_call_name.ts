/*
 * 名前を文字列として一つ受け取り、 "Hello, 名前!" という文字列を返す関数を作成してください。
 * 例えば、"Taro" という文字列を受け取ったら "Hello, Taro!" という文字列を返します。
 */
export function callName(a: string) {
  return "Hello," + " " + a + "!";
}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("callName", () => {
    expect(callName("Taro")).toBe("Hello, Taro!");
    expect(callName("Sayori")).toBe("Hello, Sayori!");
  });
}
