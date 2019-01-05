function insertionSort(arr) {
  // loop through array and compare each previous index to a key value
  for (let i = 1; i < arr.length; i++) {
    let compareIdx = i - 1
    let keyValue = arr[i]

    while (compareIdx >= 0 && arr[compareIdx] > keyValue) {
      arr[compareIdx + 1] = arr[compareIdx]
      compareIdx--
    }

    arr[compareIdx + 1] = keyValue
  }

  return arr
}
