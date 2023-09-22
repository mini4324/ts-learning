/*
 * 数値の配列array1と数値の配列array2を受け取る。array1からarray2の要素を全て取り除いたような配列を返す。
 * 020問題の複数対応版
 *
 * 例）
 *  ([1, 2, 3], [1]) が渡されたなら、返る値は [2, 3]
 *  ([1, 2, 3], [1, 2]) が渡されたなら、返る値は [3]
 *  ([1, 2, 3], [0, 487, 256]) が渡されたなら、返る値は [1, 2, 3]
 */
function omitValues(a: Array<number>, n: Array<number>) {
  const array = a.filter((i) => n.indexOf(i) == -1);
  return array;
}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, describe, expect } = import.meta.vitest;
  describe("omitValues()関数について", () => {
    it("[1, 2, 3], [1]が渡されたとき、結果が[2, 3]であること", () => {
      expect(omitValues([1, 2, 3], [1])).toEqual([2, 3]);
    });

    it("[1, 2, 3], [1, 2]が渡されたとき、結果が[3]であること", () => {
      expect(omitValues([1, 2, 3], [1, 2])).toEqual([3]);
    });

    it("[1, 2, 3], [0, 487, 256]が渡されたとき、結果が[1, 2, 3]であること", () => {
      expect(omitValues([1, 2, 3], [0, 487, 256])).toEqual([1, 2, 3]);
    });

    it("[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 3, 5, 7, 9]が渡されたとき、結果が[2, 4, 6, 8]であること", () => {
      expect(omitValues([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 3, 5, 7, 9])).toEqual([
        2, 4, 6, 8,
      ]);
    });
  });
}
