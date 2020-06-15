const merge = (left, right) => {
  // console.log(left, right)
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length &&
    rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const mergeSort = arr => {
  if (arr.length === 1) {
    return arr
  }

  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

module.exports = mergeSort;