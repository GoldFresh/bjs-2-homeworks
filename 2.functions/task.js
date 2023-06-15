'use strict';

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let total = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } if (arr[i] > max) {
      max = arr[i];
    }

    total += arr[i];
  }

  const avg = parseFloat((total / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let evenElements = 0;
  let oddElements = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenElements += arr[i];
    } else {
      oddElements += arr[i];
    }
  }

  return evenElements - oddElements;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElements = 0;
  let countEvenElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElements += arr[i];
      countEvenElements++;
    }
  }

  if (countEvenElements === 0) {
    return 0;
  }
  return sumEvenElements / countEvenElements;
}

function makeWork (arrOfArr, func) {
  let maxResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const arr = arrOfArr[i];
    const result = func(...arr);
    if (result > maxResult) {
      maxResult = result;
    }
  }

  return maxResult;
}