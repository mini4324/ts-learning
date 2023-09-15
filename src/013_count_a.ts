/*
 * 文字列を一つ受け取り、その中に含まれる "a" または "A" の数を返す関数を作成してください。
 * 例えば "apple" という文字列を受け取った場合、1を返します。
 * "banana" という文字列を受け取った場合、3を返します。
 */
export function countA(word: string) {
  let count = 0;
  for (const value of word) {
    if (value === "a" || value === "A") {
      ++count;
    }
  }
  return count;
}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("countA", () => {
    expect(countA("apple")).toBe(1);
    expect(countA("APPLE")).toBe(1);
    expect(countA("banana")).toBe(3);
    expect(
      countA(
        "All the world's a stage, And all the men and women merely players: " +
          "They have their exits and their entrances; And one man in his time plays many parts, " +
          "His acts being seven ages.",
      ),
    ).toBe(17);
  });
}
