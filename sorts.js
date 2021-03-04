

let unsorted = [1, 8, 2, 4, 3, 5, 7, 9, 6];

// selection sort O(n^2)
const selectionSort = (unsorted) => {
    let arr = [...unsorted];
    for (let i = 0; i < arr.length; i++) {
        let min = Number.MAX_SAFE_INTEGER;
        let minIndex = -1;
        for (let j = i; j < arr.length; j++) {
            if (min > arr[j]) {
                min = arr[j];
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = min;
        arr[minIndex] = temp;
    }
    return arr;
}

console.log(unsorted);
console.log(selectionSort(unsorted));


// bubble sort O(n^2)
const bubbleSort = (unsorted) => {
    let arr = [...unsorted];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(unsorted);
console.log(bubbleSort(unsorted));

// insertion sort O(n^2), but close to O(n) when the arr is almost sorted. 
const insertionSort = (unsorted) => {
    let arr = [...unsorted];
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            j--;
        }
    }    
    return arr;
}

console.log(unsorted);
console.log(insertionSort(unsorted));