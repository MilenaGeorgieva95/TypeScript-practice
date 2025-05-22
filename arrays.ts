function evenPositionElements(arr: Array<number | string>): string {
  const result: Array<number | string> = [];
  for (let i: number = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result.join(" ");
}

function evenPositionElements2(arr: Array<number | string>): string {
  const result: Array<number | string> = arr.filter(
    (el, index) => index % 2 === 0
  );
  return result.join(" ");
}

function lastKNumbersSequence(count: number, back: number): Array<number> {
  let arr: Array<number> = [1];
  for (let i = 1; i < count; i++) {
    let el: number = 0;
    for (let j = i - back; j < i; j++) {
      if (j >= 0) {
        el += arr[j];
      }
    }
    arr.push(el);
  }
  return arr;
}

function sumfirstLast(arr: number[]): number {
  const firstNum: number = Number(arr.shift());
  const lastNum: number = Number(arr.pop());
  return firstNum + lastNum;
}

function negativePositiveNumbers(arr: number[]): string {
  const resultArr: number[] = [];
  for (let el of arr) {
    if (el >= 0) {
      resultArr.push(el);
    } else {
      resultArr.unshift(el);
    }
  }
  return resultArr.join(", ");
}

function smallestTwoNumbers(arr: number[]): number[] {
  arr.sort((a, b) => a - b);
  return arr.splice(0, 2);
}

function biggerHalf(arr: Array<number>): Array<number> {
  arr.sort((a, b) => b - a);
  const length: number = Math.ceil(arr.length / 2);
  const result: Array<number> = arr.slice(length);
  return result;
}
function pieceOfPie(
  arr: Array<string>,
  flavourOne: string,
  flavourTwo: string
): Array<string> {
  const start: number = arr.indexOf(flavourOne);
  const end: number = arr.indexOf(flavourTwo) + 1;
  const list: Array<string> = arr.slice(start, end);
  return list;
}

function processOddPositions(arr: Array<number>): Array<number> {
  const oddArr: Array<number> = arr
    .filter((el, i) => i % 2 !== 0)
    .map((x: number) => x * 2)
    .reverse();
  return oddArr;
}
function biggestElement(matrix: Array<Array<number>>): number {
  let biggestNum: number = matrix[0][0];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > biggestNum) {
        biggestNum = matrix[i][j];
      }
    }
  }
  return biggestNum;
}
function diagonalSums(matrix: Array<Array<number>>): Array<number> {
  if (matrix.length !== matrix[0].length) {
    throw new Error("Matrix must be square");
  }
  let diagonalOne:number = 0;
  let diagonalTwo:number = 0;

  for (let i = 0; i < matrix.length; i++) {
    diagonalOne += matrix[i][i];
    diagonalTwo += matrix[i][matrix.length - 1 - i];
  }

  return [diagonalOne, diagonalTwo];
}
