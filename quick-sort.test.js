const quickSort = require('./quick-sort');

describe('quickSort', () => {
  test('should ascending sort the given array', () => {
    const expected = [ 1,22,32,34,44,55,76,88,102 ];
    const arr = [ 102,34,76,1,32,88,44,55,22 ];

    expect(quickSort(arr, 0, arr.length -1)).toEqual(expected);
  });
});