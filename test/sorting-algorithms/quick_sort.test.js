const quickSort = require("../../sorting-algorithms/quick_sort");

const arrayToSort = [20, 40, 10, 60, 90, 70, 50, 30, 40, 10, 100, 80];
const sortedArray = [10, 10, 20, 30, 40, 40, 50, 60, 70, 80, 90, 100];

const arrayToSortWithNegatives = [-30, -40, 30, 50, -20, 50, 10, 60];
const sortedArrayWithNegatives = [-40, -30, -20, 10, 30, 50, 50, 60];

test(`Sorting the array of positive numbers, \n ${arrayToSort}`, () => {
    expect(quickSort(arrayToSort, 0, arrayToSort.length - 1)).toEqual(
        sortedArray
    );
});

test(`Sorting the array of negative numbers included, \n ${arrayToSortWithNegatives}`, () => {
    expect(
        quickSort(
            arrayToSortWithNegatives,
            0,
            arrayToSortWithNegatives.length - 1
        )
    ).toEqual(sortedArrayWithNegatives);
});
