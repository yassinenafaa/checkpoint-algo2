function insertionSort(arr) {
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];  // The element to be inserted
        let j = i - 1;

        // Shift elements of the sorted part of the array that are greater than 'current'
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];  // Shift the element to the right
            j--;
        }

        // Insert 'current' into the correct position
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage
let array = [5, 2, 9, 1, 5, 6];
console.log("Sorted array:", insertionSort(array));
