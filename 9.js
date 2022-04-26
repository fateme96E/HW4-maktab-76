function protect_email(email){
    let splitted = email.split("@");
    let firstPart = splitted[0];
    let secondPart = splitted[1];
    let firstPartMiddle = firstPart.length / 2;
    firstPart = firstPart.substr(0, firstPartMiddle);
    console.log(firstPart + "...@" + secondPart);
}

protect_email("robin_singh@example.com")
protect_email("fatemeEsmaili78@gmail.com");
