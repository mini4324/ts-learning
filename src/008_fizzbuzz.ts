/*
 * 数値を一つ受け取り、以下のルールで結果を返す関数
 * - それが3で割り切れる場合は"Fizz"
 * - 5で割り切れる場合は"Buzz"
 * - 15で割り切れる場合は"FizzBuzz"
 * - どれでもない場合はその数値を文字列にしたもの
 */
export function getFizzBuzz() {}

/* 以下はテストコードなので触らないでください */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('getFizzBuzz', () => {
    expect(getFizzBuzz(1)).toBe('1');
    expect(getFizzBuzz(2)).toBe('2');
    expect(getFizzBuzz(3)).toBe('Fizz');
    expect(getFizzBuzz(4)).toBe('4');
    expect(getFizzBuzz(5)).toBe('Buzz');
    expect(getFizzBuzz(6)).toBe('Fizz');
    expect(getFizzBuzz(7)).toBe('7');
    expect(getFizzBuzz(8)).toBe('8');
    expect(getFizzBuzz(9)).toBe('Fizz');
    expect(getFizzBuzz(10)).toBe('Buzz');
    expect(getFizzBuzz(11)).toBe('11');
    expect(getFizzBuzz(12)).toBe('Fizz');
    expect(getFizzBuzz(13)).toBe('13');
    expect(getFizzBuzz(14)).toBe('14');
    expect(getFizzBuzz(15)).toBe('FizzBuzz');
    expect(getFizzBuzz(16)).toBe('16');
    expect(getFizzBuzz(17)).toBe('17');
    expect(getFizzBuzz(18)).toBe('Fizz');
    expect(getFizzBuzz(19)).toBe('19');
    expect(getFizzBuzz(20)).toBe('Buzz');
    expect(getFizzBuzz(21)).toBe('Fizz');
    expect(getFizzBuzz(22)).toBe('22');
    expect(getFizzBuzz(23)).toBe('23');
    expect(getFizzBuzz(24)).toBe('Fizz');
    expect(getFizzBuzz(25)).toBe('Buzz');
    expect(getFizzBuzz(26)).toBe('26');
    expect(getFizzBuzz(27)).toBe('Fizz');
    expect(getFizzBuzz(28)).toBe('28');
    expect(getFizzBuzz(29)).toBe('29');
    expect(getFizzBuzz(30)).toBe('FizzBuzz');
  });
}
