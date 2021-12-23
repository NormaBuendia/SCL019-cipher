import cipher from './cipher.js';

//crear usuario y contraseña
const botonGo = document.getElementById("Go");
if(botonGo){
    document.getElementById("Go").addEventListener("click", function login(){
        //tomar el elemento y cuando haga click pase lo siguiente:
    let usuario = document.getElementById("Username").value;
    //sacar el texto que tiene el mensaje y darle el valor
    let clave = document.getElementById("Password").value;
    
    if(usuario == "norma" && clave == "seguro"){
        //si el usuarios es ... y la clave es ...
        location.pathname = "src/pagina.html";
        //ubicacion ruta de la pagina
    }
    
    else alert("Usuario o Password incorrecto")
    // en otro caso indica el siguiente mensaje....
    
    });
}
else{

//window.addEventListener("load", inicio, true);
function mayus(e) {
    e.target.value = e.target.value.toUpperCase();
    //el target es el input que tiene el value, donde sucede
//function inicio (){
    //document.getElementById("mensaje").addEventListener("keyup", function(){
     //this.value = this.value.toUpperCase();   
   // });
}

document.getElementById("mensaje").addEventListener("keyup",mayus);
document.getElementById("cifrar").addEventListener("click",function(){ 
    // tomo el elemento getElmen.. y cuando hago click pasa lo siguiente:
    let text = document.getElementById("mensaje").value; 
    //sacar el texto que tiene el mensaje y con value el valor del mensaje
    let offSet = document.getElementById("desplazamiento").value;
    // sacar el desplazmiento y obtener su valor
    let codedText = cipher.code(text,offSet);
 
    let finalText = document.getElementById("mensaje2");
    finalText.value=codedText;
    //al final devuelva un texto con dezplazamiento y se escriba en donde dice mensaje2
},true);

document.getElementById("mensaje2").addEventListener("keyup",mayus);
    
    document.getElementById("descifrar").addEventListener("click",function(){
// tomo el elemento getElmen.. y cuando hago click, captura de eventos:
   let text = document.getElementById("mensaje").value;
   //sacar el texto que tiene el mensaje, que es el elemento en concreto y con value el valor del mensaje
   let offSet = document.getElementById("desplazamiento").value;
   //let offsetNumber = Number.parseInt(offSet);
   // sacar el desplazmiento y obtener su valor
   let decodedText = cipher.decode(text,offSet);
   //traigo el valor de index.js
   let finalText = document.getElementById("mensaje2");
   finalText.value=decodedText;
    
},true);}
//para la frase de burbujeo, de afuera hacia adentro


