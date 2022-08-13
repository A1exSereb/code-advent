import { readFileSync } from "../utils";

const parseDirections = (charsLine: string[]): string => {
  //declare char pairs
  const directMap = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">",
  };
  let wrongChar = "";
  const charsStack: string[] = [];
  //iterate through the array adding each opening character to the stack and removing it finding the opposite, if it doesn't fit I add it to wrongChar
  charsLine.forEach((char) => {
    if (char === "(" || char === "[" || char === "{" || char === "<") {
      charsStack.push(char);
    } else if (char === ")" || char === "]" || char === "}" || char === ">") {
      const poppedChar = charsStack.pop();

      if (directMap[poppedChar] !== char) {
        wrongChar = char;
        return false;
      }
    }
    return true;
  });

  return wrongChar;
};

const syntaxScoring = (data: string[]): number => {
  //declare arr of wrong chars and scores for chars
  let chars: string[] = [];
  const scores = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137,
  };
  for (let i = 0; i < data.length; i++) {
    const ch = parseDirections(data[i].split(""));
    //if wrong char exist push it to arr of wrong chars
    if (ch) chars.push(ch);
  }
  //get sum of wrong char
  return chars.reduce((pr, n) => pr + scores[n], 0);
};

const data = readFileSync("text.txt").split("\r\n");

console.log(syntaxScoring(data));
