import { N } from "vitest/dist/reporters-cb94c88b";

/*
 * 二つの数値を受け取り、その積を返す関数
 */
export function times(a: number, b: number): number {
  return a * b;
}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("times", () => {
    expect(times(2, 1)).toBe(2);
    expect(times(1, 0)).toBe(0);
    expect(times(3, 7)).toBe(21);
    expect(times(3, -2)).toBe(-6);
  });
}
