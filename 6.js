function sumRoundNums(arr){
    let sum = arr.reduce((acc, item) =>{
        console.log(acc, item);
         return acc + Math.round(item);
        
        
        
    });
    console.log(sum);
}
sumRoundNums([15.5, 2.3, 1.1, 4.7]);