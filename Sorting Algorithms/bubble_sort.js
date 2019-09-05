const arrayToSort = [20, 40, 10, 60, 90, 70, 50, 30, 80, 100];

const bubble_sort = arrayToSort => {
    arrayToSort.forEach((element, index) => {
        if (element > arrayToSort[index + 1]) {
            arrayToSort[index] = arrayToSort[index + 1];
            arrayToSort[index + 1] = element;
            bubble_sort(arrayToSort);
        }
    });

    return arrayToSort;
};

let sortedArray = bubble_sort(arrayToSort);

console.log("Sorted array:");
console.log(sortedArray);
