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
        location.pathname = "SCL019-cipher/src/pagina.html";
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
    // tomo el elemento getElmen.. con el id cifrar y cuando hago click pasa lo siguiente:
    let text = document.getElementById("mensaje").value; 
    //sacar el texto que toma con el elemento en el id mensaje 
    let offSet = parseInt(document.getElementById("desplazamiento").value);
    // sacar el desplazamiento que toma en el elemento con  el id desplazamiento, 
    //utilizo parseInt para asegurar que me me devuelva un numero
    let cadena = cipher.encode(offSet, text);
 //traigo el valor de cipher js, alberga la funcion encode, 
    let finalText = document.getElementById("mensaje2");
    //el texto final cifrado se mostrara en el elemento con id  mensaje 2
    finalText.value=cadena;
    //al final devuelva un texto cifrado 
},);//para la frase de burbujeo, de afuera hacia adentro

//document.getElementById("mensaje2").addEventListener("keyup",mayus);
    
    document.getElementById("descifrar").addEventListener("click",function(){
// tomo el elemento getElmen.. y le agrago un evento y cuando haga click ocurre
   let text = document.getElementById("mensaje").value;
   //sacar el texto que tiene el mensaje, que es el elemento en concreto con id mensaje
   let offSet = parseInt(document.getElementById("desplazamiento").value);
   //let offSetNumber = Number.parseInt(offSet);
   // sacar el desplazmiento tomar el elemento con id desplazamiento y se mostrara
   let cadena = cipher.decode(offSet, text);
   //traigo el valor de cipher.js, alberga la funcion decode, return cadena
   let finalText = document.getElementById("mensaje2");
   // el texto final descifrado se mostrara  en el elemento con id  mensaje 2
   finalText.value=cadena;
   // al final devuelva un texto cifrado 
    
    },);
//para la frase de burbujeo, de afuera hacia adentro


