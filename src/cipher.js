
const cipher = {//cipher es un objeto

code: function(text,offSet){ 
  // En este code a traves de una funcion a la que le pasamos al texto y el desplazamiento
  let cadena= ""; 
  //es una variable con un string (usando comillas) vacio

  for (let i=0; i<text.length; i++){
    //el for no depende del array
    //bucle o for es un ciclo que se va a repetir todo lo que va entre sus llaves
    //comprobar si la letra esta en el array de letras,
    //tomo cada letra del mensaje segun los parametros que se indican.
  
  let ascii = text.charCodeAt(i);
  //obtiene el numero de la letra en el codigo ascii uno por uno de forma independiente 
  let asciiOffSet = (ascii - 65 + offSet) % 26 + 65;
  // formula del codigo ascii
  // obtiene numero o valor del texto segun codigo ascii segun el desplazamiento indicado
  //console.log(asciiOffSet);
 
  let codedText = String.fromCharCode(asciiOffSet);
  //debugger
  //me devuelve una cadena de valores, siempre van juntos string.from.....
  //console.log(codedText); 
  cadena+=codedText; 
  //debugger
  //console.log(cadena);
  // sumarle al string vacio, concatena el texto, 
  }
  //console.log(cadena);

return cadena;
//muestra la cadena de texto en la ventana indicada  
},

decode: function(text, offSet){ //que le pasa al texto y al desplazamiento
   let cadena = "";
  //es una variable con un string (usando comillas) vacio
   for (let i=0; i<text.length; i++){ 
  //bucle repite una accion varias veces
  //console.log(text[i]);
   let ascii = text.charCodeAt(i);
   //console.log(ascii);
  //obtine codigo ascii de mensaje
 //if((ascii>64) && (ascii<91)){
  // si esta entre este valor y entre este  otro valor
let asciiOffSet = (ascii + 65 - offSet) % 26 + 65;
//formula codigo ascii
//console.log(asciiOffSet);
let decodedText = String.fromCharCode(asciiOffSet);
//de numero ascii a cadena de alfabeto
cadena+=decodedText;
  // concatena el texto, sumarle al string vacio
  //}
}
  //console.log(array)
return cadena;
// retorna el arreglo

}
}

export default cipher;