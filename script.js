function escrever(elemento) {
    const afterr = elemento.innerHTML.split("");
    elemento.innerHTML = "" ;
    afterr.forEach((letra , i ) => {

setTimeout(function() {
    elemento.innerHTML += letra;
    
}, 75 * i)

});

     }

const paulo = document.querySelector(".introd h1");

escrever(paulo);