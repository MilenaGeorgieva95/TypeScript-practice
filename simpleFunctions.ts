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

function previousDay(year: number, month: number, day: number): string {
  let myDate: Date = new Date(year, month - 1, day);
  myDate.setDate(myDate.getDate() - 1);
  return `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`;
}

function timeToWalk(steps: number, footprint: number, speed: number): string {
  const distanceInMeters = steps * footprint;
  const speedMetersPerSecond = speed / 3.6;

  let timeInSeconds = distanceInMeters / speedMetersPerSecond;

  const restTimeInSeconds = Math.floor(distanceInMeters / 500) * 60;
  timeInSeconds += restTimeInSeconds;

  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.round(timeInSeconds % 60);

  const formattedTime =
    `${hours.toString().padStart(2, "0")}:` +
    `${minutes.toString().padStart(2, "0")}:` +
    `${seconds.toString().padStart(2, "0")}`;

  return formattedTime;
}

function roadRadar(speed: number, area: string): string {
  const limits: Record<string, number> = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  const limit = limits[area];

  if (speed <= limit) {
    return `Driving ${speed} km/h in a ${limit} zone`;
  }

  const overSpeed = speed - limit;
  let status = "";

  if (overSpeed <= 20) {
    status = "speeding";
  } else if (overSpeed <= 40) {
    status = "excessive speeding";
  } else {
    status = "reckless driving";
  }

  return `The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - ${status}`;
}

function cookingByNumbers(numStr: string, ...actionsArr: Array<string>): void {
  let num: number = Number(numStr);

  const operationsObj: Record<string, (x: number) => number> = {
    chop: (x: number): number => x / 2,
    dice: (x: number): number => Math.sqrt(x),
    spice: (x: number): number => (x += 1),
    bake: (x: number): number => (x *= 3),
    fillet: (x: number): number => (x *= 0.8),
  };

  for (const action of actionsArr) {
    const operation = operationsObj[action];
    if (operation) {
      num = operation(num);
      console.log(num);
    } else {
      console.warn(`Unknown action: ${action}`);
    }
  }
}

function validityChecker(x1: number, y1: number, x2: number, y2: number): void {
  const calcDistance = (
    xA: number,
    yA: number,
    xB: number,
    yB: number
  ): string => {
    const distance: number = Math.sqrt((xB - xA) ** 2 + (yB - yA) ** 2);
    return Number.isInteger(distance) ? "valid" : "invalid";
  };

  console.log(`{${x1}, ${y1}} to {0, 0} is ${calcDistance(x1, y1, 0, 0)}`);
  console.log(`{${x2}, ${y2}} to {0, 0} is ${calcDistance(x2, y2, 0, 0)}`);
  console.log(
    `{${x1}, ${y1}} to {${x2}, ${y2}} is ${calcDistance(x1, y1, x2, y2)}`
  );
}

function wordsUppercase(str: string): string {
  const pattern: RegExp = /[\w]+/g;
  const matches: RegExpMatchArray | null = str.match(pattern);

  if (matches) {
    return matches.map((x) => x.toUpperCase()).join(", ");
  }
  return "No matches found!";
}
