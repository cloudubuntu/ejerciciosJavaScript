document.write("<br>Ejercicio 10");

let divTwo=parseInt(prompt("Ingrese un numero"));

if(divTwo%2===0){
    document.write("<br>El numero ingresado es divisible en 2.")
}else if(divTwo%3===0){
    document.write("<br>El numero ingresado es divisible en 3.")
}else if(divTwo%5===0){
    document.write("<br>El numero ingresado es divisible en 5.")
}else if(divTwo%7===0){
    document.write("<br>El numero ingresado es divisible en 7.")
}else{
    document.write("<br>El numero ingresado no es divisible en 2,3,5,7.")
}