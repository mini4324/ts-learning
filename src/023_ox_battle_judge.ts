/* ⭕❌ゲームの勝利判定 */

type Cell = "⭕" | "❌" | null;
type Board = [[Cell, Cell, Cell], [Cell, Cell, Cell], [Cell, Cell, Cell]];

/*
 * 引数として⭕❌ゲームのboardを受け取る。
 * ⭕がゲームに勝利している盤面であればtrueを、そうでなければfalseを返す。
 *
 * ゲームの勝利条件は以下のどれかが満たされているとき。
 * - ⭕が少なくとも横一列に並んでいるとき
 * - ⭕が少なくとも縦一列に並んでいるとき
 * - ⭕が少なくとも斜め一列に並んでいるとき
 *
 * たとえば、以下の盤面は⭕が横一列に並んでいる。
 * const board =[
 *  ["⭕", "⭕", "⭕"],
 *  [null, "❌", null],
 *  [null, "❌", null],
 * ];
 * したがって、そのときのjudgeIfMaruWins(board)はtrueを返す。
 */
function judgeIfMaruWins(board: Board): boolean {}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, describe, expect } = import.meta.vitest;
  describe("judgeIfMaruWins()関数について", () => {
    it("⭕が横一列に並んでいるときtrue", () => {
      expect(
        judgeIfMaruWins([
          ["⭕", "⭕", "⭕"],
          [null, null, null],
          [null, null, null],
        ]),
      ).toEqual(true);

      expect(
        judgeIfMaruWins([
          [null, null, null],
          ["⭕", "⭕", "⭕"],
          [null, null, null],
        ]),
      ).toEqual(true);

      expect(
        judgeIfMaruWins([
          [null, null, null],
          [null, null, null],
          ["⭕", "⭕", "⭕"],
        ]),
      ).toEqual(true);
    });

    it("⭕が縦一列に並んでいるときtrue", () => {
      expect(
        judgeIfMaruWins([
          ["⭕", null, null],
          ["⭕", null, null],
          ["⭕", null, null],
        ]),
      ).toEqual(true);

      expect(
        judgeIfMaruWins([
          [null, "⭕", null],
          [null, "⭕", null],
          [null, "⭕", null],
        ]),
      ).toEqual(true);

      expect(
        judgeIfMaruWins([
          [null, null, "⭕"],
          [null, null, "⭕"],
          [null, null, "⭕"],
        ]),
      ).toEqual(true);
    });

    it("⭕が斜め一列に並んでいるときtrue", () => {
      expect(
        judgeIfMaruWins([
          ["⭕", null, null],
          [null, "⭕", null],
          [null, null, "⭕"],
        ]),
      ).toEqual(true);

      expect(
        judgeIfMaruWins([
          [null, null, "⭕"],
          [null, "⭕", null],
          ["⭕", null, null],
        ]),
      ).toEqual(true);
    });
  });
}
