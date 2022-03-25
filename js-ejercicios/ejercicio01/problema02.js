
const btnClick = document.getElementById('btnClick');

btnClick.addEventListener('click', (e)=>{

    const cantidad =parseInt(prompt("Ingrese la cantidad de paquetes: ") );


    if(cantidad < 5){
        alert('No se permiten compras inferiores a 5 productos.');
    }
    if(cantidad >=5 && cantidad <=15){
        alert('El costo de envío es de $200.');
    }
    if(cantidad >=5 && cantidad > 15){
        alert( `Para ${cantidad} paquetes el envío es gratuito.` );
    }


})
