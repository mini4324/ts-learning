/*
 * 数値を受け取り、その数値とそれを逆順にした数値を足した数を返す関数
 * （123の逆順は321。100の逆順は001ではなく1）
 * 例) 123 -> 123 + 321 = 444
 * 例) 1824 -> 1824 + 4281 = 6105
 * 例) 100 -> 100 + 1 = 101
 */
export function addNumAndReversedNum(n: number): number {
  // ここに実装を書いてください
  const hoge = n.toString().split("").reverse().join("");
  const foo = Number(hoge) + n;
  return foo;
}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, describe, expect } = import.meta.vitest;
  describe("addNumAndReversedNum", () => {
    it("入力が1のとき、結果は2になる", () => {
      expect(addNumAndReversedNum(1)).toBe(2);
    });

    it("入力が123のとき、結果は444になる", () => {
      expect(addNumAndReversedNum(123)).toBe(444);
    });

    it("入力が100のとき、結果は101になる", () => {
      expect(addNumAndReversedNum(100)).toBe(101);
    });

    it("入力が1824のとき、結果は6105になる", () => {
      expect(addNumAndReversedNum(1824)).toBe(6105);
    });

    it("入力が2408667711680168のとき、結果は11019528889348210になる", () => {
      expect(addNumAndReversedNum(2408667711680168)).toBe(11019528889348210);
    });
  });
}
