/*
 * 数値を一つ受け取り、偶数なら "even"、奇数なら "odd"を返す関数
 */
export function getEvenOrOdd(a: number) {
  if (a % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("getEvenOrOdd", () => {
    expect(getEvenOrOdd(0)).toBe("even");
    expect(getEvenOrOdd(2)).toBe("even");
    expect(getEvenOrOdd(3)).toBe("odd");
    expect(getEvenOrOdd(128)).toBe("even");
    expect(getEvenOrOdd(131)).toBe("odd");
  });
}
