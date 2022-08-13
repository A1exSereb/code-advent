import { arrayNumSum, readFileSync } from "../utils";

const smokeBasin = (data: number[][]): number => {
  //declare arr of min points
  let mins: number[] = [];
  const length = data.length;
  for (let x = 0; x < length; x++) {
    const sublength = data[x].length;
    for (let y = 0; y < sublength; y++) {
      //get nearest x and y points
      const points = [
        data?.[x - 1]?.[y],
        data?.[x + 1]?.[y],
        data?.[x]?.[y - 1],
        data?.[x]?.[y + 1],
      ].filter((e) => e !== undefined);
      //checking if the current point is lower than the nearest points
      if (data[x][y] < Math.min(...points)) {
        mins.push(data[x][y]);
      }
    }
  }
  return arrayNumSum(mins) + mins.length;
};

const data = readFileSync("text.txt")
  .split("\r\n")
  .map((el) => el.split("").map(Number));

console.log(smokeBasin(data));
