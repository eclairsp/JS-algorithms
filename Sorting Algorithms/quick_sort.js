const arrayToSort = [20, 40, 10, 60, 90, 70, 50, 30, 100, 80];

const quicksort = (arrayToSort, low, high) => {
    if (low < high) {
        pivotPoint = pivot(arrayToSort, low, high);

        quicksort(arrayToSort, low, pivotPoint - 1);
        quicksort(arrayToSort, pivotPoint + 1, high);
    }

    return arrayToSort;
};

const pivot = (arrayToSort, low, high) => {
    const swap = (a, b) => {
        const temp = arrayToSort[a];
        arrayToSort[a] = arrayToSort[b];
        arrayToSort[b] = temp;
    };

    const pivotAt = arrayToSort[high];

    let i = low - 1;
    let j = low;

    while (j <= high - 1) {
        if (arrayToSort[j] < pivotAt) {
            i += 1;
            swap(i, j);
        }
        j += 1;
    }

    swap(i + 1, high);
    return i + 1;
};

const sortedArray = quicksort(arrayToSort, 0, arrayToSort.length - 1);

console.log("Sorted array: ");
console.log(sortedArray);
