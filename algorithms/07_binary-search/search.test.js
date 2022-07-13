// for both exercises, the id of the object you're searching for is given to you
// as integer. return the whole object that you're looking for
//
// it's up to you what to return if the object isn't found (we're not testing that)

function linearSearch(id, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return array[i];
    }
  }
  return undefined;
}

// The "solution" version in the other file is MUCH better
// This was my original solution...kind of sloppy and confusing
// function binarySearch(id, array) {
//   let item = undefined;
//   let currentIndex = Math.floor(array.length / 2);
//   let lowIndex = 0;
//   let highIndex = array.length - 1;

//   while (item === undefined) {
//     if (id === array[currentIndex].id) {
//       item = array[currentIndex];
//     } else if (id < array[currentIndex].id) {
//       highIndex = currentIndex;
//       currentIndex = Math.floor((currentIndex - lowIndex) / 2) + lowIndex;
//     } else {
//       lowIndex = currentIndex;
//       currentIndex = highIndex - Math.ceil((highIndex - currentIndex) / 2);
//     }
//   }

//   return item;
// }

// My update to the solution (mainly just naming)
function binarySearch(id, array) {
  let item;

  let searchIndex;
  let minIndex = 0;
  let maxIndex = array.length - 1;

  // If min and max overlap then the item isn't in the array...pretty clever
  while (minIndex <= maxIndex) {
    // Best way to find the middle between 2 numbers
    searchIndex = Math.floor((minIndex + maxIndex) / 2);
    item = array[searchIndex];

    if (id > item.id) {
      minIndex = searchIndex + 1;
    } else if (id < item.id) {
      maxIndex = searchIndex - 1;
    } else {
      return item;
    }
  }

  return undefined;
}

// unit tests
// do not modify the below code
test.skip('linear search', function () {
  const lookingFor = { id: 5, name: 'Brian' };
  expect(
    linearSearch(5, [
      { id: 1, name: 'Sam' },
      { id: 11, name: 'Sarah' },
      { id: 21, name: 'John' },
      { id: 10, name: 'Burke' },
      { id: 13, name: 'Simona' },
      { id: 31, name: 'Asim' },
      { id: 6, name: 'Niki' },
      { id: 19, name: 'Aysegul' },
      { id: 25, name: 'Kyle' },
      { id: 18, name: 'Jem' },
      { id: 2, name: 'Marc' },
      { id: 51, name: 'Chris' },
      lookingFor,
      { id: 14, name: 'Ben' },
    ])
  ).toBe(lookingFor);
});

test.skip('binary search', function () {
  const lookingFor = { id: 23, name: 'Brian' };
  expect(
    binarySearch(23, [
      { id: 1, name: 'Sam' },
      { id: 3, name: 'Sarah' },
      { id: 5, name: 'John' },
      { id: 6, name: 'Burke' },
      { id: 10, name: 'Simona' },
      { id: 12, name: 'Asim' },
      { id: 13, name: 'Niki' },
      { id: 15, name: 'Aysegul' },
      { id: 17, name: 'Kyle' },
      { id: 18, name: 'Jem' },
      { id: 19, name: 'Marc' },
      { id: 21, name: 'Chris' },
      lookingFor,
      { id: 24, name: 'Ben' },
    ])
  ).toBe(lookingFor);
});
