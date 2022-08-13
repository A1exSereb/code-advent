import { readFileSync } from "../utils";

const sonarSweep = (data: number[]): number => {
  let counter = 0; // declaration of a counter that will be returned as a result
  let prev = data[0]; // as the first previous element, take the first element of the array
  //in the loop we check if the number is greater than the previous one, then the counter increases, after which overwrite the previous value with the current one
  for (let i = 1; i < data.length; i++) {
    if (prev < data[i]) {
      counter++;
    }
    prev = data[i];
  }

  return counter;
};

const data = readFileSync("text.txt").split("\n").map(Number); // convert the string to an array of numbers

console.log(sonarSweep(data));
