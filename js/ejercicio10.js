document.write("<br>Ejercicio 10");

let divThree=parseInt(prompt("Ingrese un numero para conocer si es divisible en 2,3,5 o7"));

if(divThree%2===0||divThree%3===0||divThree%5===0||divThree%7===0){
    document.write("<br>El numero ingresado si es divisible por uno de los 4 divisores dados");
}else{
    document.write("<br>El numero ingresado no es divisible por ninguno de los divisores dados");
}