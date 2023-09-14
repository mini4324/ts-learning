/*
 * 文字列を受け取り、文字列のNGワードを伏せて返す関数。
 * NGワードは "hoge" のみで、NGワードの部分は「****」に置き換えて返す。
 * たとえば "hello, hoge! how are you?" という文字列を受け取ったら
 * "hello, ****! how are you?" という文字列を返す。
 */
export function hideBannedWord(word: string) {
  return word.replace("hoge", "****");
}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("hideBannedWord", () => {
    expect(hideBannedWord("hello, world!")).toBe("hello, world!");
    expect(hideBannedWord("hello, hoge! how are you?")).toBe(
      "hello, ****! how are you?"
    );
    expect(hideBannedWord("hogeは最高です")).toBe("****は最高です");
  });
}
