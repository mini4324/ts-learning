/*
 * 配列の基本的な操作を確認しよう
 * なお数値の配列の型は number[] で書き表せる
 */

/* 配列[1, 2, 3]を返す関数 */
function defineArray() {}

/*
 * 数値の配列と数値nを受け取り、配列の末尾にそのnを加えて返す関数。
 * たとえば[2, 2]と1が渡されたら[2, 2, 1]を返す。
 */
function insertToLast() {}

/*
 * 数値の配列と数値nを受け取り、配列の先頭にそのnを加えて返す関数。
 * たとえば[2, 2]と1が渡されたら[1, 2, 2]を返す。
 */
function insertToFirst() {}

/*
 * 数値の配列を２つ受け取り、結合して返す関数。
 * たとえば[2, 2]と[5, 5]が渡されたら[2, 2, 5, 5]を返す。
 */
function joinTwoArrays() {}

/*
 * 数値の配列を受け取り、逆順にして返す関数。
 * たとえば[1, 2, 3]が渡されたら[3, 2, 1]を返す。
 */
function reverseArray() {}

/*
 * 数値の配列を受け取り、昇順に並び替えて返す関数。
 * たとえば[3, 2, 4, 1]が渡されたら[1, 2, 3, 4]を返す。
 */
function sortArrayAsc() {}

/*
 * 数値の配列を受け取り、降順に並び替えて返す関数。
 * たとえば[3, 2, 4, 1]が渡されたら[4, 3, 2, 1]を返す。
 */
function sortArrayDesc() {}

/*
 * 数値の配列arrayと数値nを受け取る。arrayの中にnが含まれていればtrueを返し、そうでないならfalseを返す関数
 */
function findN() {}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, describe, expect } = import.meta.vitest;
  describe("defineArray()関数について", () => {
    it("結果が1, 2, 3の数値の配列であること", () => {
      expect(defineArray()).toEqual([1, 2, 3]);
    });
  });

  describe("insertToLast()関数について", () => {
    it("[1, 2, 3], 1を渡すと[1, 2, 3, 1]が返ってくること", () => {
      expect(insertToLast([1, 2, 3], 1)).toEqual([1, 2, 3, 1]);
    });

    it("[], 100を渡すと[100]が返ってくること", () => {
      expect(insertToLast([], 100)).toEqual([100]);
    });
  });

  describe("insertToFirst()関数について", () => {
    it("[1, 2, 3], 1を渡すと[1, 1, 2, 3]が返ってくること", () => {
      expect(insertToFirst([1, 2, 3], 1)).toEqual([1, 1, 2, 3]);
    });

    it("[], 100を渡すと[100]が返ってくること", () => {
      expect(insertToFirst([], 100)).toEqual([100]);
    });
  });

  describe("joinTwoArrays()関数について", () => {
    it("[1, 2, 3], [4, 5, 6]を渡すと[1, 2, 3, 4, 5, 6]が返ってくること", () => {
      expect(joinTwoArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("[], [1]を渡すと[1]が返ってくること", () => {
      expect(joinTwoArrays([], [1])).toEqual([1]);
    });
  });

  describe("reverseArray()関数について", () => {
    it("[1, 2, 3]を渡すと[3, 2, 1]が返ってくること", () => {
      expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
    });
  });

  describe("sortArrayAsc()関数について", () => {
    it("[2, 4, 1, 10, 5]を渡すと[1, 2, 4, 5, 10]が返ってくること", () => {
      expect(sortArrayAsc([2, 4, 1, 10, 5])).toEqual([1, 2, 4, 5, 10]);
    });
  });

  describe("sortArrayDesc()関数について", () => {
    it("[2, 4, 1, 10, 5]を渡すと[10, 5, 4, 2, 1]が返ってくること", () => {
      expect(sortArrayDesc([2, 4, 1, 10, 5])).toEqual([10, 5, 4, 2, 1]);
    });
  });

  describe("findN()関数について", () => {
    it("[1, 2, 3]と2を渡すとtrueが返ってくること", () => {
      expect(findN([1, 2, 3], 2)).toBe(true);
    });

    it("[1, 2, 3]と1000を渡すとfalseが返ってくること", () => {
      expect(findN([1, 2, 3], 1000)).toBe(false);
    });
  });
}
