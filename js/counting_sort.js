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

function countingSort(arrayTosort, maximun) {
  let arrayEqual = countKeysEqual(arrayToSort, maximun);
  let arrayLess = countKeysLess(arrayEqual, maximun);
  return arrayLess;
}

let arrayToSort = [4, 1, 5, 0, 1, 6, 5, 1, 5, 3];
let maximun = 6;

console.log(countingSort(arrayToSort, maximun));
