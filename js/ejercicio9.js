document.write("<br>Ejercico 9<br>");

let str=prompt("Ingrese una frase");
let vocal="";

for(let i=0; i<str.length; i++){
    vocal=str.substr(i,1);
    if(vocal==="a"){
        document.write(" "+vocal);
    }else if(vocal==="e"){
        document.write(" "+vocal);
    }else if(vocal==="i"){
        document.write(" "+vocal);
    }else if(vocal==="o"){
        document.write(" "+vocal);
    }else if(vocal==="u"){
        document.write(" "+vocal);
    }
}
