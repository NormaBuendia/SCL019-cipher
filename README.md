
#### Inicio
Empece mi proyecto, pensando en crear una pagina donde puedieran enviarse mensajes cifrados, que no pudieran ser vulneranos, super seguros.
Pensado en usar por mujeres empoderadas que necesitan expresarse en codigo para poder alimentar su super mente. Mandar y recibir mensajes entre sus super amigas,  mensajes en codigo y poder cifrarlos y descifrarlos.
Coloque un fondo donde se ve que quieren entrar a la fuerza, pero con el poder de la Super Mujer Candado no lo lograran jamas.
Luego pueden colocar su usuario y contraseña.
En la siguiente pagina podran colocar el texto que quieran cifrar o descifrar, el texto puede ser en mayusculas y minusculas
Luego si necesitan regresar a la pagina de bienvenida pueden hacerlo con la flecha <=
Y no se olviden seguirnos en Facebook e Instagram
Vamos Girls Power

### Index HTML
Dentro del body trabaje el Html semantico
Coloque un Header, con unos ID para poder  identificar las etiquetas de los elementos.
Luego coloque un Main, coloque una imagen con el logotipo 
Dentro de el main coloque un form para colocar el formulario que se asocia con label for para introducir el usuario y una contraseña, cada uno independiente.
Tambien dentro del main, coloque un button type, para introducir un boton Go le coloco una etiqueta y con el boton  iria a pagina.hml
Luego coloque figure, para colocar un video representativo
Luego coloque el footer, donde coloque figure para colocar las imagenes de las redes y el copyrigth
![Getting Started](src/img/Imagen_Index.html.png) esta es la imagen de index.Html
### Pagina HTML
Dentro del body
Coloque un Header, con unos Id para poder  identificar las etiquetas de los elementos.
Luego coloque un Main, coloque una imagen con el logotipo.
Dentro de el main coloque un form para colocar los input.
Utilice input text con un id para las ventanas de mensajes de cifrado y descifrado, tambien le agregue al input los atributos de autocomplete off = que no se guarda, spellcheck = que no se subrayacon rojo, placeholder = que se ve ingrese su usuario.
Cree un elemento input number para crear el desplazamiento, con un id para identificarlo.
Luego cree los botenes de cifrar y descifrar con button type y con un id para poder identificar al elemento.
Luego coloque el footer, donde coloque figure para colocar las imagenes de las redes y el copyrigth.
![Getting Started](src/img/Imagen_Pagina.html.png) esta es la imagen de pagina.Html
### Index.js
Primero coloco un constante Go, que toma el elemento con id Go para y le agrego un evento click, que le da funcion de login, le doy valor al elemento con id usuario y le doy valor al elemento con id password. 
Luego utilizo condicional if para poder determinar  el usuario y la contraseña. Tambien con locatio.pathname le coloco la ruta **** cuando lo subo a GitHub, le tengo que colocar la ruta con que subio en el index.html "SCL019-cipher/src/pagina.html", cuando lo tengo que ver en mi computador lo tengo que borrar y dejar solo "src/pagina.html"
Luego coloco un condicional else alert, si es que colocan usuario o clave equivocada.

Llamo al elemento con el id cifrar y el creo un evento click que cuando haga click ocurra una funcion
Luego al elemento con el id Mensaje le paso el texto
Luego al elemento con el id Desplazamiento le paso el desplazamiento
Luego traigo la funcion encode de cipher.js
Luego llamo al elemento con el id mensaje 2 y le traigo el texto cifrado
Luego el texto cifrado es un string

Llamo al elemento con el id descifrar y el creo un evento click que cuando haga click ocurra una funcion
Luego al elemento con el id Mensaje le paso el texto
Luego al elemento con el id Desplazamiento le paso el desplazamiento
Luego traigo la funcion decode de cipher.js
Luego llamo al elemento con el id mensaje 2 y le traigo el texto cifrado
Luego el texto cifrado es un string

###Cipher.js
Encode que es un objeto, con un funcion que le paso un text y un offset y pasa lo siguiente
Luego creo un variable con un string vacio let cadena=""
Luego creo una variable con un desplazamiento cero let asciiOffset=0
Luego le creo un bucle for, donde se indican los valores del index, que empiza en cero, la longitud del texto y que va sumando de a 1.
(El codigo Ascii es el que usa el teclado de las computadoras)
Luego con ChartCodeAt, encuentro el valor de las letras en el codigo Ascii
Luego, creo la condicional If para poder delimitar el uso de las letras mayusculas en el codigo ascii que van de 65 a 90.
Luego utilizo la formula para hallar el valor de la letra de acuerdo al desplazamiento.
Luego con String.fromChartCode encuentro la letra con el nuevo valor segun el dssplazamiento requerido.

Luego con un else if para delimitar el uso de las letras minusculas segun el codigo ascii que van del 97 al 122
Luego utilizo la formula para hallar el valor de la letra de acuerdo al desplazamiento.
Luego con String.fromChartCode encuentro la letra con el nuevo valor segun el desplazamiento requerido.

Luego con un else se indica que si no esta el texto dentro de las letras minusculas o mayusculas igual se devuelva un valor.

Luego concatena el texto y retorna el string al index.js

Decode que es un objeto, con un funcion que le paso un text y un offset y pasa lo siguiente
Luego creo un variable con un string vacio let cadena=""
Luego creo una variable con un desplazamiento cero let asciiOffset=0
Luego le creo un bucle for, donde se indican los valores del index, que empiza en cero, la longitud del texto y que va sumando de a 1.
(El codigo Ascii es el que usa el teclado de las computadoras)
Luego con ChartCodeAt, encuentro el valor de las letras en el codigo Ascii
Luego, creo la condicional If para poder delimitar el uso de las letras mayusculas en el codigo ascii que van de 65 a 90.
Luego utilizo la formula para hallar el valor de la letra de acuerdo al desplazamiento.
Luego con String.fromChartCode encuentro la letra con el nuevo valor segun el dssplazamiento requerido.

Luego con un else if para delimitar el uso de las letras minusculas segun el codigo ascii que van del 97 al 122
Luego utilizo la formula para hallar el valor de la letra de acuerdo al desplazamiento.
Luego con String.fromChartCode encuentro la letra con el nuevo valor segun el desplazamiento requerido.

Luego con un else se indica que si no esta el texto dentro de las letras minusculas o mayusculas igual se devuelva un valor.

Luego concatena el texto y retorna el string al index.js
