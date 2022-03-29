

/* Ejercicio 1 Generar número aleatorio dentro de un rango

Calcular un número random o aleatorio dentro de un rango en Javascript no es tan trivial
como en otros lenguajes.

La función que usaremos (Math.random())
nos devuelve un número aleatorio con decimales entre 0 y 1.

 Luego nosotros, haciendo uso de sumas y redondeos debemos transformar
ese número aleatorio entre 0 y 1 a un número aleatorio entre 25 y 75, por ejemplo.

Para ello, yo utilizo la fórmula que indico a continuación.
La copio, la pego y sustituyo los valores. Es una fórmula fácil de razonar, pero francamente, cuando la necesito, la copio y la pego:

Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

Como ejemplo, si deseamos generar un número aleatorio entre 10 y 5, la sentencia sería
*/
                 //Math.floor (Math.random() * (MAX - MIN + 1)) + MIN;

const btnRandom = document.getElementById("btn1");

btnRandom.addEventListener('click', () => {
    const MIN = parseInt(prompt("Ingrese el valor minimo") ) ;
    const MAX = parseInt(prompt("Ingrese un valor máximo:") );

    if(MAX < MIN){
        alert(`El valor Maximo ${MAX} debe ser mayor al Minimo ${MIN}`)

    }else {

        const randomNum = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

    console.log(randomNum);

    document.getElementById("num1").innerHTML= `Numero generado en el rango de ${MIN}-${MAX}: <h3>${randomNum}</h3>`

    }

});



//Ejercicio 2
// Ejercicios números aleatorio
//investigar https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

//1. Obtener un número aleatorio entre 5 y 7.

const btnRun = document.getElementById("btn2");

btnRun.addEventListener('click', ()=>{
    const MIN = 5;
    const MAX = 7;

    const numRandom2 = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

    document.getElementById("num2").innerHTML= `<h4>${numRandom2}</h4>`
});

//2. Ejercicio letra aleatoria

//Obtener una letra aleatoria de tu nombre.

//Tendrás que usar los siguientes códigos:


//nombre.charAt();
//nombre.length;

const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {

    const nombre = prompt("Ingresa tu nombre:");

    document.getElementById("letra").innerHTML= nombre.length;

    const MAX = nombre.length;
    const MIN = 0

    console.log(MAX);
    console.log(MIN);

    const num = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

    console.log(num);

    const letraRandom = nombre.charAt(num);

    alert(`${letraRandom}`)

    console.log(letraRandom);
    document.getElementById("letra").innerHTML= `Letra aleatoria: <b>${letraRandom}</b>`;

});

/* Ejercicio 3
Calculamos un número aleatorio en un rango comprendido entre 0 y el número de letras de tu nombre.
Utilizamos ese número aleatorio para obtener la letra de tu nombre que ocupa esa posición.
Mostramos la letra en la pagina. */

const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {


    const nombre = prompt("Ingresa tu nombre:");

    const min = 0;
    const max = nombre.length;

    const num = Math.floor(Math.random() * (max - min + 1)) + min;


    const letraPosicion = nombre.charAt(num);

    console.log(letraPosicion) ;

    document.getElementById("num4").innerHTML= `Nombre: <b>${nombre}</b> Numero aleatorio: <b>${num}</b>
    Letra en esa posicion: <b>${letraPosicion} </b>`

});







