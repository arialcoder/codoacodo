

const btn01 = document.getElementById('button-01')
const btn02 = document.getElementById('button-02')
const btn03 = document.getElementById('button-03')
const btn04 = document.getElementById('button-04')

btn01.addEventListener('click',(e) =>{

   let cadena = prompt('Ingrese una palabra')
   alert(`${cadena} tiene ${cadena.length} caracteres` )
} )


function recortarCadena() {
    let cadena = prompt('Ingrese texto');
    let numero = parseInt(prompt('Ingrese numero') );

    if(numero <= cadena.length){
        return  alert (cadena.slice(0,numero));
    }else{
       let numero = prompt(`Ingrese un numero menor a ${cadena.length}`)
       return  alert (cadena.slice(0,numero))
    }
};

function arrText() {
    const cadena = prompt('Ingrese un texto');
    array = cadena.split(',')
    return alert(`[ ${array} ]`); ;
};


function repetirText() {
    const cadena = prompt('Ingrese el texto a repetir:');
    let numero = parseInt(prompt('Ingrese numero') );
    const repetir = cadena.repeat(numero);
    console.log(typeof(repetir))
    alert(repetir);
};

