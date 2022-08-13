import { readFileSync } from "../utils";

const segmentSearch = (data: string[][][]): number => {
  console.log(data);
  let counter = 0;

  for (const [, digits] of data) {
    counter += digits.filter(
      (output) =>
        output.length === 2 || // 1
        output.length === 4 || // 4
        output.length === 3 || // 7
        output.length === 7 // 8
    ).length;
  }
  return counter;
};

const data = readFileSync("text.txt")
  .split("\n")
  .map((signal) =>
    signal.split(" | ").map((output) => output.replace("\r", "").split(" "))
  );

console.log(segmentSearch(data));
