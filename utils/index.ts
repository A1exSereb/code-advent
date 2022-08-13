import * as fs from "fs";

export const readFileSync = (path: string): string => {
  return fs.readFileSync(path, "utf-8");
};

export const arrayNumSum = (arr: number[]): number =>
  arr.reduce((prev, next) => prev + next, 0);

export const arrayStrSum = (arr: string[]): number =>
  arr.reduce((prev, next) => prev + +next || 0, 0);
