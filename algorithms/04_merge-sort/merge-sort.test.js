/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

function splitTheList(list) {
  const splitIndex = Math.ceil(list.length / 2);
  const latterHalf = list.splice(splitIndex);
  return [list, latterHalf];
}

function merge(arr1, arr2) {
  const sortedList = [];
  do {
    if (!arr1.length) {
      sortedList.push(...arr2.splice(0));
    } else if (!arr2.length) {
      sortedList.push(...arr1.splice(0));
    } else if (arr1[0] <= arr2[0]) {
      sortedList.push(...arr1.splice(0, 1));
    } else {
      sortedList.push(...arr2.splice(0, 1));
    }
  } while (arr1.length || arr2.length);

  return sortedList;
}

const mergeSort = (nums) => {
  // base case:
  if (nums.length <= 1) return nums;

  const [left, right] = splitTheList(nums);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
};

// unit tests
// do not modify the below code
test.skip('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
