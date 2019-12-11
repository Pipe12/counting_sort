console.log("Start a counting sort in javaScript");

function countKeysEqual(arrayToSort, maximun) {
  console.log("It is the array to sort: " + arrayToSort + "\nIt is a maximun value in a array: " +  maximun);
  let arrayEqual = new Array(maximun + 1).fill(0);
  console.log("arrayEqual before throughout the array: " + arrayEqual);
  for (var i = 0; i < arrayToSort.length; i++) {
    let key = arrayToSort[i];
    arrayEqual[key]++;
  }
  console.log("arrayEqual after throughout the array: " + arrayEqual);
  return arrayEqual;
}

function countingSort(arrayTosort, maximun) {
  let arrayEqual = countKeysEqual(arrayToSort, maximun);
  console.log(arrayEqual);
}

let arrayToSort = [4, 1, 5, 0, 1, 6, 5, 1, 5, 3];
let maximun = 6;

console.log(countingSort(arrayToSort, maximun));
