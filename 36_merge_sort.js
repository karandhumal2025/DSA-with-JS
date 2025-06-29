function conquer(arr,first,mid,last) {
    let i = first;
    let j = mid + 1;
    let k = 0;
    let temp = new Array(last - first + 1);
    
    while (i <= mid && j <= last) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    
    while (j <= last) {
        temp[k++] = arr[j++];
    }
    
    for (let l = 0; l < k; l++) {
        arr[first + l] = temp[l];
    }
}