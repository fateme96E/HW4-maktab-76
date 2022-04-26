function calExponent(base, exponent){
    if (exponent == 0){
        return 1;
    }else if (exponent == 1){
        return base;
    }else if(exponent > 1){
        return base * calExponent(base, exponent - 1);
    }else{
        return (1/base) * calExponent(base, exponent + 1);
    }
}
let res1 = calExponent(2,0);
console.log(`2^0  =  ${res1}`);
let res2 = calExponent(2,1);
console.log(`2^1  =  ${res2}`);
let res3 = calExponent(2,-2);
console.log(`2^-2  =  ${res3}`);
let res4 = calExponent(-2,3);
console.log(`-2^3  =  ${res4}`);