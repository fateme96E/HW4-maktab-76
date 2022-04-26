function curDay(separator){
    let curDate = new Date();
    let day = curDate.getDate();
    if (day < 10){
        day = "0" + day;
    }
    let month = curDate.getMonth() + 1;
    if (month < 10){
        month = "0" + month;
    }
    let year = curDate.getFullYear();
    let res = month + separator + day + separator + year;
    console.log(res);
}
curDay('/');
curDay('-');