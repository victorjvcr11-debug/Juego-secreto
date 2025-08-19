let numeroSecreto = 0;//Declara una variable para usar el numero dado por la funcion
let intentos = 0;
//Declara una lista o array
let listaDeNumerosSorteados = []; //Generar una lista vacia \
let numeroMaximo = 10;

function asignarTextoElemento (elemeto, texto){
    let elementoHTML = document.querySelector(elemeto); //Titulo es una variable del tipo 'objeto'. 
    elementoHTML.innerHTML = texto; //Como en los metadatos puedes acceder a ellos con el nombre seguido de un . y lo que se desea modificar.
    //query retorna el objeto.
    //query es una funcion que nos permite selecionar elementos en HTML
}

function verificarIntento (){
   let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);//seleccionar elementos de HTML pero usando el ID declarado en HTML
    //Por si sola la funcion 'getElementById' retorna un 'objeto'
    //si al final se agrega un . se puede acceder a los metodos que ese elemento tiene
    //Aclarar que los metodos modifican atributos dentro del elemento 'input' en el cod HTML.
    //console.log('Comparacion de valor y tipo: ',numeroUsuario === numeroSecreto); //Comparar valor y tipo de variable 
    // console.log(intentos)
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${intentos === 1 ? 'intento':'intentos' }`);
        //Eliminar el disabled del boton 'Nuevo Juego' usando el selector getid
        document.getElementById(/*id tal y como fue declarado en HTML*/'reiniciar' ).removeAttribute(/*Indicar atirbuto a eleminar*/'disabled');
    } else {
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        } else {
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

//Seleccionar evento en HTML y modificar un atributo del mismo.
function limpiarCaja(){
    //Forma de resetear valor de caja
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() { //Funcion que retorna un valor con 'return'.
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados); 
    //Evaluar si se lleno la lista o se sortearon todos los numeros / condicion de salida
    if (listaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero generado esta incluido en la lista 
        if (listaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();  
        } else  {
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    
        }
    }
    
    
}

function condicionesIniciales (){
    asignarTextoElemento('h1','Juego de numero secreto'); //Llamada a funcion con parametros correspondientes a 
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);// variables 'elemento' y 'texto'
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function iniciarJuego (){
    //Limpiar Caja 
    limpiarCaja ();
    //Resetear intentos
    //Mostrar Titulo y mensaje de inicio
    //Generar numero aleatorio
    condicionesIniciales ();
    //Deshabilidtar boton de 'NuevoJuego'
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
condicionesIniciales ();
