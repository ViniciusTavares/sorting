module.exports = arr => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}