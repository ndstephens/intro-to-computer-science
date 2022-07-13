/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions

  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getMaxDigits(arr) {
  let maxDigits = 0;
  arr.forEach((item) => {
    maxDigits = Math.max(maxDigits, item.toString().length);
  });
  return maxDigits;
}

function getDigitValue(num, digit) {
  const place = 10 ** digit;
  return Math.trunc((num % place) / (place / 10));
}

// function getDigitValueAsString(num, digit, maxDigits) {
//   const numAsString = num.toString().padStart(maxDigits, '0');
//   const position = maxDigits - digit;
//   return numAsString[position];
// }

function radixSort(nums) {
  // input array's length
  const length = nums.length;

  // maxDigits = maximum digits of any number in nums
  // controls how many times we loop through the array
  const maxDigits = getMaxDigits(nums);

  // create 10 buckets, one for each integer value, 0-9
  const buckets = new Array(10).fill().map(() => []);

  // go through array "maxDigits" number of times
  for (let i = 1; i <= maxDigits; i++) {
    // transfer items from nums array to buckets
    for (let j = 0; j < length; j++) {
      const item = nums.shift();
      const value = getDigitValue(item, i);
      // const value = getDigitValueAsString(item, i, maxDigits);
      buckets[value].push(item);
    }
    // transfer from buckets back into nums array
    buckets.forEach((bucket, index) => {
      nums.push(...bucket);
      buckets[index] = [];
    });
  }

  return nums;
}

// unit tests
// do not modify the below code
describe('radix sort', function () {
  it.skip('should sort correctly', () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it.skip('should sort 99 random numbers correctly', () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
