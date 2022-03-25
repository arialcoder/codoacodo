const btnClick = document.getElementById('btnClick');

btnClick.addEventListener('click', (e)=>{

    const nombre =prompt("Ingrese un nombre: ");

    alert(`Tu nombre: ${nombre} tiene ${nombre.length} letras.`)

    const numero =parseInt( prompt(` ${nombre}, Ingresa un numero: `) );

    const cantLetras = nombre.length;
    const resultado = cantLetras + numero;

    if (resultado >= 15){
        alert(`${nombre}, numero ingresado: ${numero}:
        resultado de la suma total : ${resultado}
        es mayor a 15 caracteres.`)
    }else {
        alert(`${nombre} la cuenta total es menor a 15 caracteres`)
    }

})