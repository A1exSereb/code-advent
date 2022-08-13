import { readFileSync } from "../utils";

const getCordinates = (
  x1: number,
  x2: number,
  y1: number,
  y2: number
): number[][] => {
  // create arr for all cordinates in x1,y2 and x2,y2
  const result = [
    [x1, y1],
    [x2, y2],
  ];

  if (x1 === x2) {
    if (y1 < y2) {
      for (let i = y1 + 1; i < y2; i++) {
        result.push([x1, i]);
      }
    } else {
      for (let i = y2 + 1; i < y1; i++) {
        result.push([x1, i]);
      }
    }
  }
  if (y1 === y2) {
    if (x1 < x2) {
      for (let i = x1 + 1; i < x2; i++) {
        result.push([i, y1]);
      }
    } else {
      for (let i = x2 + 1; i < x1; i++) {
        result.push([i, y1]);
      }
    }
  }

  return result;
};

const createCordinatesMap = (arr: string[]) => {
  //count the number of repeating points
  let map = {};
  arr.forEach((val) => (map[val] ? (map[val] += 1) : (map[val] = 1)));
  console.log(map);

  return map;
};

const hydrothermalVenture = (data: string[][]): number => {
  const newArr: string[] = [];
  let counter = 0;
  for (let i = 0; i < data.length; i++) {
    const newdata = data[i].map((el) => el.split(","));
    //get all x and y cordinates
    let x1 = +newdata[0][0],
      y1 = +newdata[0][1],
      x2 = +newdata[1][0],
      y2 = +newdata[1][1];
    //get all coordinates from two points
    const elems = getCordinates(x1, x2, y1, y2).map((el) => el.join(","));

    newArr.push(...elems);
  }
  const map = createCordinatesMap(newArr);
  for (let k in map) {
    //count all repeating points
    if (map[k] > 1) counter++;
  }

  return counter;
};

const data = readFileSync("text.txt")
  .split("\r\n")
  .map((el) => el.split(" -> "));

console.log(hydrothermalVenture(data));
