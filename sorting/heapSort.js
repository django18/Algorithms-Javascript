import { swap } from "../utility";

const buildMaxHeap = (arr, n) => {
  let lastLeafNodeIndex = n / 2 - 1;
  for (let i = lastLeafNodeIndex; i >= 0; i--) {
    heapify(arr, n, i);
  }
};

const heapify = (arr, size, i) => {
  let max = i;
  if (2 * i + 1 < size && arr[2 * i + 1] > arr[max]) {
    max = 2 * i + 1;
  }
  if (2 * i + 2 < size && arr[2 * i + 2] > arr[max]) {
    max = 2 * i + 2;
  }

  if (max != i) {
    swap(arr, max, i);
    heapify(arr, size, max);
  }
};

export const heapSort = (arr, n) => {
  buildMaxHeap(arr, n);
  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }
};
