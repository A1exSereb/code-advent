import { arrayStrSum, readFileSync } from "../utils";

const calculateMatrixSum = (arr: string[][]): number => {
  let sum = 0;
  //go through all the rows of the board and calculate the sum of the elements
  for (let i = 0; i < arr.length; i++) {
    sum += arrayStrSum(arr[i]);
  }

  return sum;
};

const checkForWinner = (arr: string[][]) => {
  // if full row equals to null winned is found
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].every((x) => x === null)) {
      return true;
    }
  }

  // if full column equals to null winned is found
  for (let i = 0; i < arr.length; i++) {
    if (arr.map((x) => x[i]).every((x) => x === null)) {
      return true;
    }
  }

  return false;
};

const getBoard = (data: string[], rowsCount: number): string[][][] => {
  let counter = 0;
  let boardNumber = 0;
  let newBoadrs: string[][][] = [];
  //I remove the input line from the array by converting each line into a separate array and removing extra spaces
  const boards = data.slice(1).map((row) => row.trim().split(/\s+/));
  //I iterate over the array and add their subarrays to a new array with boards, when one board is full, the subarrays are added to the next
  for (let i = 0; i < boards.length; i++) {
    newBoadrs[boardNumber]
      ? newBoadrs[boardNumber].push(boards[i])
      : (newBoadrs[boardNumber] = [boards[i]]);
    counter++;
    if (counter !== 0 && counter % rowsCount === 0) boardNumber++;
  }

  return newBoadrs;
};

const giantSquid = (path: string[], rowsCount: number): number => {
  //get input
  const inputNumbers = data[0].split(",");
  //call function to get boards
  const boards = getBoard(data, rowsCount);
  //iterate over the arrays and compare the numbers inside with the input number, if they match, change the number to null, after each iteration it is checked whether there is a winner
  for (let i = 0; i < inputNumbers.length; i++) {
    const currentNum = inputNumbers[i];
    for (let board of boards) {
      for (let row of board) {
        row.forEach((el, i) => {
          if (el === currentNum) row[i] = null;
        });
      }
      if (checkForWinner(board)) {
        //if a winner is found, get the sum of all non-null numbers on the board
        const arrSum = calculateMatrixSum(board);

        return +currentNum * arrSum;
      }
    }
  }
};

const data = readFileSync("text.txt").split("\r\n").filter(Boolean);
console.log(giantSquid(data, 5));
