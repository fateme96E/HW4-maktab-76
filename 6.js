function sumRoundNums(arr){
    let sum = arr.reduce((acc, item) => acc + Math.round(item), 0);
    console.log(sum);
}
sumRoundNums([15.5, 2.3, 1.1, 4.7]);
