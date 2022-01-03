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
//else{}
//window.addEventListener("load", inicio, true);

//document.getElementById("mensaje").addEventListener("keyup",mayus);
//function mayus(e) {
   // e.target.value = e.target.value.toUpperCase();
    //el target es el input que tiene el value, donde sucede
//function inicio (){
    //document.getElementById("mensaje").addEventListener("keyup", function(){
     //this.value = this.value.toUpperCase(); 
//});
//}
document.getElementById("cifrar").addEventListener("click",function(){ 
    // tomo el elemento getElmen.. y cuando hago click pasa lo siguiente:
    let text = document.getElementById("mensaje").value; 
    //sacar el texto que tiene el mensaje y con value el valor del mensaje
    let offSet = parseInt(document.getElementById("desplazamiento").value);
    // sacar el desplazamiento y obtener su valor
    let cadena = cipher.encode(offSet, text);
 //traigo el valor de cipher js, alberga la funcion decode, 
    let finalText = document.getElementById("mensaje2");
    //el texto final cifrado se mostrara en mensaje 2
    finalText.value=cadena;
    //al final devuelva un texto cifrado 
},true);//al hacer click en este boton se obtiene el mensaje y se realiza la funcion

//document.getElementById("mensaje2").addEventListener("keyup",mayus);
    
    document.getElementById("descifrar").addEventListener("click",function(){
// tomo el elemento getElmen.. y cuando hago click, captura de eventos, con el id descifrar
   let text = document.getElementById("mensaje").value;
   //sacar el texto que tiene el mensaje, que es el elemento en concreto y con value el valor del mensaje
   let offSet = parseInt(document.getElementById("desplazamiento").value);
   //let offSetNumber = Number.parseInt(offSet);
   // sacar el desplazmiento y obtener su valor
   let cadena = cipher.decode(offSet, text);
   //traigo el valor de cipher.js, alberga la funcion decode, return cadena
   let finalText = document.getElementById("mensaje2");
   // el texto final descifrado se mostrara  en mensaje 2
   finalText.value=cadena;
   // al final devuelva un texto cifrado 
    
    },true);


//para la frase de burbujeo, de afuera hacia adentro


