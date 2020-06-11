module.exports = arr => {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    let temp = arr[i];

    for (let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[minimum]) {
        minimum = j;        
      }
    }

    arr[i] = arr[minimum];
    arr[minimum] = temp;
  }
  return arr;
}