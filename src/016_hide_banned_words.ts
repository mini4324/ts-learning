/*
 * 文字列を受け取り、文字列のNGワードを伏せて返す関数。
 * NGワードは "hoge", "fuga", "foo", "bar" の四つ。
 * NGワードの部分は「****」に置き換えて返す。
 * たとえば "hello, hoge! how are you? fuga is great!" という文字列を受け取ったら
 * "hello, ****! how are you? **** is great!" という文字列を返す。
 */
export function hideBannedWords() {}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("hideBannedWords", () => {
    expect(hideBannedWords("hello, world!")).toBe("hello, world!");
    expect(hideBannedWords("hello, hoge! how are you? fuga is great!")).toBe(
      "hello, ****! how are you? **** is great!",
    );
    expect(
      hideBannedWords(
        "hogeは最高です。fugaも素晴らしいです。fooはbarでhogeはbarですね。",
      ),
    ).toBe(
      "****は最高です。****も素晴らしいです。****は****で****は****ですね。",
    );
  });
}
