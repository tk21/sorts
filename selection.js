function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i

    // find the smallest remaining value in the unsorted portion of array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    // swap
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}
