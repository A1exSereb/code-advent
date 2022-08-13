import { arrayNumSum, readFileSync } from "../utils";

const calculateFuelCost = (data: number[], to: number) =>
  //under the module calculate the cost of a step and calculate the total cost
  arrayNumSum(data.map((el) => Math.abs(el - to)));

const whalesTreachery = (data: number[]) => {
  //declare min flue cost and step
  let step = -1;
  let min = Number.POSITIVE_INFINITY;
  //while we dont get min call calculateFuelCost and after every call increase step by 1
  while (calculateFuelCost(data, ++step) < min) {
    min = calculateFuelCost(data, step);
  }

  return min;
};

const data = readFileSync("text.txt").split(",").map(Number);

console.log(whalesTreachery(data));
