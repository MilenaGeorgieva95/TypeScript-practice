function largestNumber(
  firstNum: number,
  secNum: number,
  thirdNum: number
): string {
  const maxNum: number = Math.max(firstNum, secNum, thirdNum);
  return `The largest number is ${maxNum}.`;
}

function circleArea(input: number | string): string {
  if (typeof input === "number") {
    const area: number = Math.pow(input, 2) * Math.PI;
    return area.toFixed(2);
  } else {
    return `We can not calculate the circle area, because we receive a ${typeof input}.`;
  }
}

function mathOperations(
  numOne: number,
  numTwo: number,
  str: "+" | "-" | "*" | "/" | "%" | "**"
): number {
  switch (str) {
    case "+":
      return numOne + numTwo;
    case "-":
      return numOne - numTwo;
    case "/":
      return numOne / numTwo;
    case "*":
      return numOne * numTwo;
    case "%":
      return numOne % numTwo;
    case "**":
      return numOne ** numTwo;
    default:
      throw new Error("Invalid operator");
  }
}

function sumOfNumbersNtoM(n: string, m: string): number {
  let numN: number = Number(n);
  let numM: number = Number(m);
  let sum: number = 0;
  for (let i = numN; i <= numM; i++) {
    sum += i;
  }
  return sum;
}

function dayOfWeek(dayStr: string): number {
  switch (dayStr) {
    case "Monday":
      return 1;
    case "Tuesday":
      return 2;
    case "Wednesday":
      return 3;
    case "Thursday":
      return 4;
    case "Friday":
      return 5;
    case "Saturday":
      return 6;
    case "Sunday":
      return 7;
    default:
      throw new Error("Invalid day!");
  }
}

function daysInAMonth(monthNum: number, yearNum: number): number {
  let endOfTheMonthDate: Date = new Date(yearNum, monthNum, 0);
  let daysCount: number = endOfTheMonthDate.getDate();
  return daysCount;
}

function squareOfStars(sizeNum: number = 5): void {
  for (let i: number = 1; i <= sizeNum; i++) {
    console.log("* ".repeat(sizeNum));
  }
}

function agregateElements(arr: string[]): void {
  let sum: number = 0;
  let inverseSum: number = 0;
  let concatenation: string = "";

  for (let num of arr) {
    let curNum: number = Number(num);
    sum += curNum;
    inverseSum += 1 / curNum;
    concatenation += num;
  }
  console.log(sum);
  console.log(inverseSum);
  console.log(concatenation);
}
