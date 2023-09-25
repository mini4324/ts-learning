/*
 * 数値の配列arrayと数値nを受け取る。arrayからnを取り除いたような配列を返す。
 * たとえば、渡された引数が[1, 1, 2, 3, 1, 5, 8]と1なら、[2, 3, 5, 8]が返る。
 */
function omitValue(a: Array<number>, n: number) {
  const array = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== n) {
      array.push(a[i]);
    }
  }
  return array;
}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, describe, expect } = import.meta.vitest;
  describe("omitValue()関数について", () => {
    it("[1, 1, 5, 3, 1, 8, 1]と1が渡されたとき、結果が[5, 3, 8]であること", () => {
      expect(omitValue([1, 1, 5, 3, 1, 8], 1)).toEqual([5, 3, 8]);
    });
  });
}
