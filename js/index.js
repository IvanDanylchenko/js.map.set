"use strict";

console.group("MAP");
const arr = new Map([
  [1, "first"],
  [3, "third"],
]);

for (let keys of arr.keys()) {
  console.log("keys :>> ", keys);
}

for (let values of arr.values()) {
  console.log("values :>> ", values);
}

console.log("arr.size :>> ", arr.size);

arr.set(2, "two");

arr.delete(3);

console.log("arr.has(2) :>> ", arr.has(2));

console.log("arr.has(5) :>> ", arr.has(5));

console.groupEnd();

console.group("SET");
const set = new Set([1, 2, 3]);

console.log("set.has(3) :>> ", set.has(3));

console.log("set.has(4) :>> ", set.has(4));

set.add(11);

set.add(7);

for (let v of set) {
  console.log("v :>> ", v);
}

let sum = 0;

for (let v of set) {
  sum += v;
}

console.log("sum :>> ", sum);

set.delete(2);

set.clear();

console.groupEnd();

console.group("Array");
const arrNumbers = [1, 6, 9, 4, 9, 1, 5, 6];

const arrOfUniqueNumbers = [...new Set(arrNumbers)];

console.log("arrOfUniqueNumbers  :>> ", arrOfUniqueNumbers);

const arrNumbers2 = [5, 10, 11];

const arrOfUniqueNumbers2 = [...arrNumbers, ...arrNumbers2];

console.log("arrOfUniqueNumbers2 :>> ", arrOfUniqueNumbers2);

console.groupEnd();
