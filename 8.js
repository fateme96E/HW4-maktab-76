function monthName(date){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthNum = date.getMonth();
    console.log(months[monthNum]);
}
monthName(new Date("10/11/2009"));
monthName(new Date("11/13/2014"));