

outer: for(let i = 0; i < 20 ; i++) {

    let number = i * 2;
    while(number>=0){
        number-=1;
        if (number==2) continue outer;

        console.log("number is: "+ number);
    }

    console.log("after while");
}

let prime_numbers = [ 2,3,5,7,11,13,17,19,23];

for(let i = 0; i < prime_numbers.length ; i++) {
    console.log("the prime number is: "+ prime_numbers[i]);
}

prime_numbers.forEach(function (value, index){
    console.log("the prime number is: "+ value + " - " + prime_numbers[index]);
})