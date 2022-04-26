let array = [1, 2, 3, 4, 5, 6];
function countArrSum(arr){
    let sum = 0;
    for (let num of arr){
        sum += num;
    }
    console.log(sum);
}
countArrSum(array);