/* 二次元配列の簡単な操作について */

const BOARD = [
  ["❌", "⭕", "❌"],
  ["❌", "❌", "⭕"],
  ["❌", "❌", "❌"],
];

/*
 * 引数として[x, y]の配列を一つ受け取り、BOARDのx行目y列目のセルが⭕であればtrueを、そうでなければfalseを返すような関数。
 * 例: [1, 0]は一番上の列の真ん中のセルなので、isOk([0, 1])はtrueを返す。
 *
 * 仮引数の記法について参考: https://jsprimer.net/basic/function-declaration/#function-destructuring
 */
function isOk([x, y]: [number, number]): boolean {}

/*
 * 引数として[x, y]の配列を一つ受け取り、BOARDのx行目y列目のセルのx軸方向のセルのどちらかが⭕であればtrueを、それ以外の場合はfalseを返すような関数。
 * 例: [1, 1]は真ん中のセルで、右隣のセルが⭕なので、isXNeighborOk([1, 1])はtrueを返す。
 */
function isXNeighborOk([x, y]: [number, number]): boolean {}

/*
 * 引数として[x, y]の配列を一つ受け取り、BOARDのx行目y列目のセルのy軸方向のセルのどちらかが⭕であればtrueを、それ以外の場合はfalseを返すような関数。
 * 例: [1, 1]は真ん中のセルで、上のセルが⭕なので、isYNeighborOk([1, 1])はtrueを返す。
 */
function isYNeighborOk([x, y]: [number, number]): boolean {}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, describe, expect } = import.meta.vitest;
  describe("isOk()関数について", () => {
    it("[0, 0]はfalse", () => {
      expect(isOk([0, 0])).toEqual(false);
    });

    it("[1, 0]はtrue", () => {
      expect(isOk([1, 0])).toEqual(true);
    });

    it("[2, 1]はtrue", () => {
      expect(isOk([2, 1])).toEqual(true);
    });

    it("[1, 2]はfalse", () => {
      expect(isOk([1, 2])).toEqual(false);
    });
  });

  describe("isXNeighborOk()関数について", () => {
    it("[0, 0]はtrue", () => {
      expect(isXNeighborOk([0, 0])).toEqual(true);
    });

    it("[0, 1]はfalse", () => {
      expect(isXNeighborOk([0, 1])).toEqual(false);
    });

    it("[2, 1]はfalse", () => {
      expect(isXNeighborOk([2, 1])).toEqual(false);
    });

    it("[2, 2]はfalse", () => {
      expect(isXNeighborOk([2, 2])).toEqual(false);
    });
  });

  describe("isYNeighborOk()関数について", () => {
    it("[0, 0]はfalse", () => {
      expect(isYNeighborOk([0, 0])).toEqual(false);
    });

    it("[1, 1]はtrue", () => {
      expect(isYNeighborOk([1, 1])).toEqual(true);
    });

    it("[2, 1]はfalse", () => {
      expect(isYNeighborOk([2, 1])).toEqual(false);
    });

    it("[2, 2]はtrue", () => {
      expect(isYNeighborOk([2, 2])).toEqual(true);
    });
  });
}
