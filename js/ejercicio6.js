document.write("<br><br>Ejercicio6");

let numOne6=parseInt(prompt("Ingrese un numero por favor"));
let numTwo6=parseInt(prompt("Ingrese un otro numero por favor"));

if(numOne6>numTwo6){
    document.write("<br>El numero mayor es el primero ingresado: "+ numOne6);
}else if(numOne6===numTwo6){
    document.write("<br>Los numeros son iguales: "+ numOne6 + "="+numTwo6);
}else{
    document.write("<br>El numero mayor es el segundo ingresado: "+ numTwo6);
}