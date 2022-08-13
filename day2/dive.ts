import { readFileSync } from "../utils";
import { Command } from "./types";

const dive = (data: string[]): number => {
  // declare x and y
  let posX = 0,
    posY = 0;
  //pass through the array to calculate the displacement of the subarina
  data.forEach((str) => {
    //get direction and offset value
    const [com, value] = str.split(" ");
    //compare command and add value
    switch (true) {
      case com === Command.FORWARD:
        posX += +value;
        break;
      case com === Command.UP:
        posY -= +value;
        break;
      case com === Command.DOWN:
        posY += +value;
        break;
      default:
        break;
    }
  });
  return posX * posY;
};

const data = readFileSync("text.txt").split("\n");

console.log(dive(data));
