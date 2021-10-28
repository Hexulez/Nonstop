function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var array = rangeOfNumbers(startNum, endNum - 1);
    array.push(endNum);
    return array;
  }
}
