function largestNumber(
  firstNum: number,
  secNum: number,
  thirdNum: number
): string {
  const maxNum: number = Math.max(firstNum, secNum, thirdNum);
  return `The largest number is ${maxNum}.`;
}

function circleArea(input: number | string): string {
  if (typeof input==="number") {
    const area: number = Math.pow(input, 2) * Math.PI;
    return area.toFixed(2);
  } else {
    return `We can not calculate the circle area, because we receive a ${typeof input}.`;
  }
}

function mathOperations(numOne:number, numTwo:number, str:"+" | "-" | "*" | "/" | "%" | "**") : number {
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
    default: throw new Error("Invalid operator");
  }
}