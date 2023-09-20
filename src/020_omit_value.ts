/*
 * 数値の配列arrayと数値nを受け取る。arrayからnを取り除いたような配列を返す。
 * たとえば、渡された引数が[1, 1, 2, 3, 1, 5, 8]と1なら、[2, 3, 5, 8]が返る。
 */
function omitValue(a: Array<number>, n: number) {
  const result = a.filter(function (b) {
    return b !== n;
  });

  return result;
}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, describe, expect } = import.meta.vitest;
  describe("omitValue()関数について", () => {
    it("[1, 1, 5, 3, 1, 8, 1]と1が渡されたとき、結果が[5, 3, 8]であること", () => {
      expect(omitValue([1, 1, 5, 3, 1, 8, 1], 1)).toEqual([5, 3, 8]);
    });
  });
}
