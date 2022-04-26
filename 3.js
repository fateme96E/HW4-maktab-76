function firstLetterToUpper(str){

    let temp;
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++){
        temp = arr[i][0].toUpperCase() + arr[i].slice(1);
        arr[i] = temp;
    }
    arr = arr.join(" ");
    console.log(arr);
}
firstLetterToUpper('the quick brown fox')