let numero = 1;
limite = 50;

while (numero <= limite){
    if (numero % 5 == 0 & numero % 3 == 0){
        console.log("FIZZBUZZ");
            numero = numero + 1;
    }else if (numero % 5 == 0){
        console.log("BUZZ");
            numero = numero + 1;
    }else if (numero % 3 == 0){
        console.log("FIZZ");
            numero = numero + 1;
    }else{
        console.log(numero);
        numero = numero +1;
    }
}