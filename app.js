// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let numAleatorio = aleatorio();


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function aleatorio() {
   
return Math.floor(Math.random()*5)+1;
    
}



function capturarAmigos() {
    
    return document.getElementById('amigo').value;
}

    
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}


function agregarAmigo() {

        
    for ( var i=1; i<=5; i++){

        amigos[i] = capturarAmigos();
        console.log(amigos[i]);

        limpiarCaja();
    }
           return ;
}


function sortearAmigo() {

    // console.log(amigos[numAleatorio]); 
    asignarTextoElemento('p',`El amigo secreto es: ${amigos[numAleatorio]} `);
    return;
     
 }

sortearAmigo();


agregarAmigo();


