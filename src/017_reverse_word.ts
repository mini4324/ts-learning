/*
 * 文字列を受け取り、逆さまにして返す関数。
 * "hello" -> "olleh"
 * "hello, world!" -> "!dlrow ,olleh"
 * "こんにちは" -> "はちにんこ"
 */
export function reverseWord() {}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("reverseWord", () => {
    expect(reverseWord("hello")).toBe("olleh");
    expect(reverseWord("hello, world!")).toBe("!dlrow ,olleh");
    expect(reverseWord("こんにちは")).toBe("はちにんこ");
  });
}
