const btnClick = document.getElementById('btnClick');

btnClick.addEventListener('click', (e)=>{

    const nombre =prompt("Ingrese un nombre: ");

    const edad =parseInt( prompt(` ${nombre}, Ingresa tu edad: `) );

    if (edad >= 18){
        alert(`${nombre}, podes entrar.`)
    }else {
        alert(`${nombre}, no podes entrar.`)
    }

})