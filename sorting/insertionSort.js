export const insertionSort = (arr, order = 1) => {
  let condition = order >= 0 ? asc : desc;
  for (let i = 1; i < arr.length; i++) {
    let pivot = arr[i];
    let j = i - 1;
    while (j >= 0 && condition(arr[j], pivot)) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = pivot;
  }
};

const asc = (u, v) => u > v;
const desc = (u, v) => u < v;
