const btnClick1 = document.getElementById('btnClick1');
const btnClick2 = document.getElementById('btnClick2');
const btnClick3 = document.getElementById('btnClick3');
const btnClick4 = document.getElementById('btnClick4');
const btnClick5 = document.getElementById('btnClick5');

btnClick1.addEventListener('click', (e)=>{

    alert('Hello Arbi');

});

btnClick2.addEventListener('click', ()=>{

     document.getElementById("saludo").innerText ='Hello Arbi';
})

btnClick3.addEventListener('click', (e)=>{


   //  document.getElementsByClassName('suma').innerText = document.write( 3 + 5);
})

btnClick4.addEventListener('click', (e)=>{

    const nombre = prompt('Ingrese su nombre:');
    document.getElementById("saludo2").innerHTML =(`<i> Hola ${nombre}</i>`);
})


btnClick5.addEventListener('click', (e)=>{

    const usuario = prompt('Ingrese su nombre:');

    document.getElementById("saludo3").innerHTML =(`<b>Hola ${usuario} tu nombre tiene ${usuario.length} letras.</b>`);
})










