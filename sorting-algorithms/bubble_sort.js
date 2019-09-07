const arrayToSort = [20, 40, 10, 60, 90, 70, 50, 30, 80, 100];

const bubbleSort = arrayToSort => {
    arrayToSort.forEach((element, index) => {
        if (element > arrayToSort[index + 1]) {
            arrayToSort[index] = arrayToSort[index + 1];
            arrayToSort[index + 1] = element;
            bubbleSort(arrayToSort);
        }
    });

    return arrayToSort;
};

let sortedArray = bubbleSort(arrayToSort);

console.log("Sorted array:");
console.log(sortedArray);

module.exports = bubbleSort;
