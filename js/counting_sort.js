console.log("Start a counting sort in javaScript \n\n");

function countKeysEqual(arrayToSort, maximun) {
  console.log("Inside countKeysEqual function")
  console.log("It is the array to sort: " + arrayToSort + "\nIt is a maximun value in a array: " +  maximun);
  let arrayEqual = new Array(maximun + 1).fill(0);
  console.log("arrayEqual before throughout the array: " + arrayEqual);
  for (var i = 0; i < arrayToSort.length; i++) {
    let key = arrayToSort[i];
    arrayEqual[key]++;
  }
  console.log("arrayEqual after throughout the array: " + arrayEqual + "\n\n");
  return arrayEqual;
}

function countKeysLess(arrayEqual, maximun) {
  console.log("Inside countKeysLess function")
  console.log("It is a arrayEqual: " + arrayEqual + "\nthis is a maximun value inside the array: " + maximun);

  let arrayLess = new Array(maximun + 1).fill(0);
  console.log("arrayLess before throughout the array: " + arrayLess);
  for (var i = 1; i <= maximun; i++) {
    arrayLess[i] = arrayLess[i - 1] + arrayEqual[i - 1];
  }
  console.log("arrayLess after throughout the array: " + arrayLess + "\n\n");
  return arrayLess;
}

function rearrange(arrayToSort, arrayLess, maximun) {
  console.log("Inside rearrange function");
  console.log("This is a arrayToSort: " + arrayToSort + "\nThis is the maximun value at the arrayToSort: " + maximun + "\nThis is a arrayLess: " + arrayLess);

  let sortedArray = new Array(arrayToSort.length).fill(0);
  console.log("sortedArray before throughout the array: " + sortedArray);

  for (var i = 0; i < arrayToSort.length; i++) {
    let key = arrayToSort[i];
    let index = arrayLess[key];
    sortedArray[index] = arrayToSort[i];
    arrayLess[key]++;
  }
  console.log("sortedArray after throughout the array: " + sortedArray + "\n\n");
  return sortedArray;
}

function countingSort(arrayTosort, maximun) {
  let arrayEqual = countKeysEqual(arrayToSort, maximun);
  let arrayLess = countKeysLess(arrayEqual, maximun);
  let sortedArray = rearrange(arrayToSort, arrayLess, maximun);
  return sortedArray;
}

let arrayToSort = [4, 1, 5, 0, 1, 6, 5, 1, 5, 3];
let maximun = 6;
console.log(countingSort(arrayToSort, maximun));
