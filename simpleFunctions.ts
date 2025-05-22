function fruit(
  typeFruit: string,
  weightGrams: number,
  priceKg: number
): string {
  let weightKg: number = weightGrams / 1000;
  let totalPrice: number = weightKg * priceKg;
  return `I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(
    2
  )} kilograms ${typeFruit}.`;
}

function greatestCommonDivisor(numOne: number, numTwo: number): number {
  let GCD: number = numOne % numTwo;
  while (GCD !== 0) {
    numOne = numTwo;
    numTwo = GCD;
    GCD = numOne % numTwo;
  }
  return numTwo;
}

function sameNumbers(num: number): void {
  const digits: string[] = num.toString().split("");
  const areSame: boolean = digits.every((d) => d === digits[0]);
  let sum: number = digits.reduce((acc, d) => acc + Number(d), 0);
  console.log(areSame);
  console.log(sum);
}

function previousDay(year: number, month: number, day: number):string {
  let myDate: Date = new Date(year, month - 1, day);
  myDate.setDate(myDate.getDate() - 1);
  return `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`;
}
