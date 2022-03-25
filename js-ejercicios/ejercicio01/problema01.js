const btnCalcular = document.getElementById('btnCal');

btnCalcular.addEventListener('click',(e)=>{

   let tipoEmpleado = prompt(
     "Elige una categoria de empleado: 1 repositor - 2 cajero - 3 supervisor"
   );

   if (tipoEmpleado == "1") {
     let repositor = prompt("ingrese el sueldo del repositor: ");

     let sueldoRepo = (parseFloat(repositor) * 0.11).toFixed(2);
     console.log(sueldoRepo);
     alert(`El sueldo de un respositor es: $${sueldoRepo}.-`);
   } else
   if (tipoEmpleado == "2") {
     //console.log(cajero);
     alert(`El sueldo de un cajero es: $25.630,89.-`);
   }else
   if (tipoEmpleado == "3") {
     let supervisor = prompt("ingrese el sueldo del supervisor: ");

     let sueldoSupervisor = (
       parseFloat(supervisor) -
       parseFloat(supervisor) * 0.11
     ).toFixed(2);
     console.log(sueldoSupervisor);
     alert(`El sueldo neto de un supervisor es: $${sueldoSupervisor}.-`);
   }

})


 var precio = parseFloat(prompt("Introduce un precio"));
 var iva = Number(prompt("Introduce el iva"));

 console.log(iva);


 function masIva(precio, iva){
   iva = iva || 21
   var coniva = (precio + precio*iva/100);
   return coniva;
 }



 if(iva > 0){

   var resultado = masIva(precio, iva);
 }
 else{
   var resultado = masIva(precio);
   console.log(resultado);
 }
 document.write("Precio sin iva: " + precio);
 document.write("<br>Precio más Iva: " + resultado);