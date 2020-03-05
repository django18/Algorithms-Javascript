export const mergeSort = (arr, l, h) => {
  if (h > l) {
    const mid = parseInt((l + h) / 2, 10);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, h);
    merge(arr, l, mid, h);
  }
};

const merge = (arr, l, m, h) => {
  let p = l;
  let q = m + 1;
  let dummyArr = new Array(h - l + 1),
    k = 0;
  for (let i = l; i <= h; i++) {
    if (p > m) {
      dummyArr[k++] = arr[q++];
    } else if (q > h) {
      dummyArr[k++] = arr[p++];
    } else if (arr[p] < arr[q]) {
      dummyArr[k++] = arr[p++];
    } else {
      dummyArr[k++] = arr[q++];
    }
  }
  for (let i = 0; i < k; i++) {
    arr[l++] = dummyArr[i];
  }
};
