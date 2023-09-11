/*
 * 文字列を二つ受け取り、それらを結合した文字列を返す関数を作成してください。
 */
export function concatStrings() {}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('concatStrings', () => {
    expect(concatStrings('hello, ', 'world!')).toBe('hello, world!');
    expect(concatStrings('str', 'ing')).toBe('string');
  });
}
