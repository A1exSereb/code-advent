import { readFileSync } from "../utils";

const lanternfish = (initial: number[], day: number): number => {
  if (day === 0) {
    //base case
    return initial.length;
  } else {
    //recursive case
    //every day we decrease the counter of fish by 1 and count the number of 0. add new fish to the array depending on the number of 0
    let counter = 0;
    const newState = initial.map((el) => {
      if (el === 0) {
        counter++;
        return 6;
      } else {
        return el - 1;
      }
    });

    for (let i = 0; i < counter; i++) {
      newState.push(8);
    }
    //recursively calling the function passing a new array and decrementing the day by 1
    return lanternfish(newState, day - 1);
  }
};

//declare days and initial state
const days = 80;
let initialState = readFileSync("text.txt").split(",").map(Number);

console.log("return", lanternfish(initialState, days));
