document.write("<br><br>Ejercicio7");

let numOne7=parseInt(prompt("Ingrese el primer numero"));
let numTwo7=parseInt(prompt("Ingrese el segundo numero"));
let numThree7=parseInt(prompt("Ingrese el tercer numero"));

if(numOne7>numTwo7&&numOne7>numThree7){
    document.write("<br>El primer numero es el mayor. Es: "+numOne7 );
}else if(numTwo7>numThree7){
    document.write("<br>El segundo numero es el mayor. Es: "+numTwo7);
}else if(numOne7===numTwo7&&numTwo7===numThree7){
    document.write("<br>Los numeros ingresados son iguales. Y son: "+numOne7+", "+numTwo7+", "+numThree7);
}else{
    document.write("<br>El tercer numero es el mayor. Es: "+numThree7);
}