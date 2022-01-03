
const cipher = {//cipher es un objeto

encode: function(text,offSet){ 
  if (offSet === 'null' || text.length === 0 || offSet === 0) {
    throw new TypeError();
   }
  // En este code a traves de una funcion a la que le pasamos al texto y el desplazamiento
  let cadena= ''; 
//es una variable con un string (usando comillas) vacio
  let asciiOffSet=0;
  
  for (let i=0; i<text.length; i++){
  //bucle o for es un ciclo que se va a repetir todo lo que va entre sus llaves
  //la propiedad de length de un objeto string representa la longitud de la cadena, 
  //esta propiedad devuelve el numero de caracteres de una cadena

  let ascii = text.charCodeAt(i);
  // se obtiene el valor del index segun el codigo ascii
  //obtiene el numero de la letra en el codigo ascii uno por uno de forma independiente 
  if((ascii>64) && (ascii<91)){
  //si la posicion de la letra  estan entre estos valores, letras mayusculas
 
  asciiOffSet = (ascii - 65 + offSet) % 26 + 65;
  // formula del codigo ascii para encontrar el desplazamiento del codigo ascci en letras mayusculas
  //console.log(asciiOffSet);
 
  cadena += String.fromCharCode(asciiOffSet);
  //me devuelve una cadena de valores, siempre van juntos string.from....., 
  //me devuelve una cadena con las letras en su nueva posicion

  } else if ((ascii>96) && (ascii<123)){
    //si tambien la posicion de la letra esta entre estos nuevos valores, letras minusculas
    asciiOffSet = (ascii - 97 +offSet) % 26 + 97;
    // varible con formula del codigo ascii para el desplazamiento para cifrar, letras minusculas
    cadena += String.fromCharCode(asciiOffSet);
    // se le suma  la  nueva posicion de la letra,
    //me devuelve una cadena con las letras en su nueva posicion
  } else { 
    // tambien si no esta entre los otros valores(mayusculas y minusculas)
  //console.log(codedText); 
  cadena += String.fromCharCode(offSet); 
  // se le suma el nuevo valor del desplazamiento
  }}

  //console.log(cadena);

return cadena;
//retorna la cadena de texto
},

decode: function(text, offSet){ //que le pasa al texto y al desplazamiento
  if (offSet === 'null' || text.length === 0 || offSet === 0){
   throw new TypeError();
  }
   let cadena = '';
//es una variable con un string (usando comillas) vacio
   let asciiOffSet = 0
   
  for (let i=0; i<text.length; i++){ 
  
  //bucle o for es un ciclo que se va a repetir todo lo que va entre sus llaves
  //la propiedad de length de un objeto string representa la longitud de la cadena, 
  //esta propiedad devuelve el numero de caracteres de una cadena
 //console.log(text[i]);
   let ascii = text.charCodeAt(i);
   //console.log(ascii);
  //obtine codigo ascii del texto, un valor
 if((ascii>64) && (ascii<91)){
  // si esta entre este valor y entre este  otro valor, letras mayusculas
  asciiOffSet = (ascii  + 65 - offSet) % 26 + 65;
//formula codigo ascii, para letras mayusculas
//console.log(asciiOffSet);
cadena += String.fromCharCode(asciiOffSet); 
//me devuelve una cadena con las letras en su nueva posicion

 } else if ((ascii>=97) && (ascii<=122)) {
   asciiOffSet = (ascii  - 97 - offSet) % 26 + 97;

   cadena += String.fromCharCode(asciiOffSet);
   //console.log (cadena);
 } else {
//de numero ascii a cadena de alfabeto
cadena+=String.fromCharCode(ascii);
//console.log(cadena);
 //me devuelve una cadena con las letras en su nueva posicion
  }
}
  //console.log(array) 
return cadena;
// retorna el arreglo
   }
  }
  

export default cipher;