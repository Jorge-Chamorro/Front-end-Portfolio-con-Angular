
// a partir de aqui todo lo necesario para que haga la escritura del mensaje del subtitulo

var tex = "Soy Jorge Chamorro - desarrollador web full stack";
var tex2 = "Bienvenido a mi pagina";
var tex3 = "Puedes explorar mas abajo para conocerme y conocer mi trabajo";
var frases = 3;


function maquinaEscribir (contenedor, texto, intervalo) {
    
    
    var arrayTexto = texto.split(''); //desarmo el string en un array, cuando tiene '' separa letra por letra, sino separa cada vez que encuentre el caracter que le ponga
    var longitud = texto.length;
    var etiquetaContenedora = document.getElementById(contenedor); //elijo la etiqueta a llenar
    i = 0;
    var timer = setInterval (agregarLetras, intervalo); // setInterval (funcion, intervalo)
            
            function agregarLetras (){  
            
            if (i === longitud) {
                clearInterval(timer); //sale del setInterval si i es igual a la longitud
                timer = null; //esto es para limpiar la variable timer, siempre va con el nombre de la variable que se use
                setTimeout (borrarTexto, 2500, texto, 100); //ejecuta la funcion que empieza a borrar
            } else {
                etiquetaContenedora.innerHTML += arrayTexto[i]; //agrega la letra que esta en el array[posicion i] y cuando vuelve a entrar agrega la que sigue
                i++; // i = i++ no funciona no se porque
            }
            }    

                function borrarTexto (texto, intervalo){ //funcion que borra
                    var o = i + 1;
                    var timer2 = setInterval (borrarLetras, intervalo);
                    function borrarLetras() {
                    if (i === 0) {   //si el contador de letras borradas termina
                        clearInterval(timer2);
                        timer2 = null;                   //sale del interval del borrador
                        
                        frases--
                        if (frases === 1){
                            maquinaEscribir("subtitle", tex3, 100);                            
                        } 
                            if (frases === 2){
                        maquinaEscribir("subtitle", tex2, 100);}

                        if (frases === 0) { 
                            frases = 3;
                            maquinaEscribir("subtitle", tex, 100);
                            
                    }
                        
                    } else {
                        var contador = i - o;
                        var retroceso = texto.slice(0, contador); //va recortando el texto (achicandolo) de a una letra
                        etiquetaContenedora.innerHTML = retroceso; //lo va imprimiendo en la pantalla, cuando llega a 0 entra por la linea 35
                        i--; 
                    }
                } 
                }

}

window.onload = setTimeout(imprimirCadenas, 4000); //setTimeout demora x segundos antes de ejecutar la funcion, los parametros de la funcion a ejecutar van al final


function imprimirCadenas () {     //la funcion con la que arranca la pagina despues de cargar el html
    maquinaEscribir ("subtitle", tex, 100);
}