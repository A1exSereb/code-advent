import { readFileSync } from "../utils";

const binaryDiagnostic = (path: string[]): number => {
  //declare gamma and epsilon ratings
  let g = "",
    e = "";

  for (let i = 0; i < data[0].length; i++) {
    let zeroCount = 0,
      oneCount = 0;
    //iterate over each line counting every 1 and 0 in i index of row
    data.forEach((row) => (row[i] === "0" ? zeroCount++ : oneCount++));
    //depending on the result, I add 1 or 0 to the resulting rows g(gamma) and e(epsilon)
    if (zeroCount > oneCount) {
      g += "0";
      e += "1";
    } else {
      e += "0";
      g += "1";
    }
  }
  //convert from binary to decimal and return their multiplication
  return parseInt(g, 2) * parseInt(e, 2);
};

const data = readFileSync("text.txt")
  .replace(/(\r\n|\n|\r)/gm, "\n")
  .split("\n");

console.log(binaryDiagnostic(data));
