const insertionSort = require('./insertion-sort');

describe('insertionSort', () => {
  test('should ascending sort the given array', () => {
    const expected = [ 1,22,32,34,44,55,76,88,102 ];
    const arr = [ 102,34,76,1,32,88,44,55,22 ];

    expect(insertionSort(arr)).toEqual(expected);
  });
});