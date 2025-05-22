
//BUBBLE SORT STARTING FROM 0 INDEX
function bubbleSort(arr: number[]): number[]{
    const arrLen = arr.length

    for(let i=0; i < arrLen - 1; i++){
        for (let j=0; j < arrLen - i - 1; j++ ) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

// Example usage
const unsorted = [5, 2, 9, 1, 5, 6];
console.log("Sorted:", bubbleSort(unsorted));