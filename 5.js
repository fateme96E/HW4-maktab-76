function merge_array(arr1, arr2){
    let merged = [].concat(arr1,arr2);
    let uniqueMergedArr = Array.from(new Set(merged));
    console.log(uniqueMergedArr);
}
merge_array([1, 3], [2, 2, 30, 1]);