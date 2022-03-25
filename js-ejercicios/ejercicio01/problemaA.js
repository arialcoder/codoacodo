//OPCION 1

/* let dineroMarcos = prompt("cuando dinero tienes, Marcos?");
let dineroArbu = prompt("cuando dinero tienes, Arbu");
let dineroFranco = prompt("cuando dinero tienes, Franco?");

dineroArbu= parseInt(dineroArbu); //para la resta tenemos que convertirlo con esta funcion a numero ej "30" a 30

if (dineroMarcos >= 30 && dineroMarcos < 45) {
  alert("Marcos, Podes comprarte un Guaymallen");
} else if (dineroMarcos >= 45 && dineroMarcos < 54) {
  alert("Marcos, Podes comprarte un Jorgito");
} else if (dineroMarcos >= 54 && dineroMarcos < 70) {
  alert("Marcos, Podes comprarte un Tofi simple ");
} else if (dineroMarcos >= 70 && dineroMarcos < 85) {
  alert("Marcos, Podes comprarte un Capitan del espacio ");
} else if (dineroMarcos >= 85 && dineroMarcos < 100) {
  alert("Marcos, Podes comprarte un Terrabusi triple");
} else if (dineroMarcos >= 100) {
  alert("Marcos, Podes comprarte un Milka triple  o un alfajor Pepitos");
} else {
  alert("Marcos, no podes comprarte nada");
}

if (dineroArbu >= 30 && dineroArbu < 45) {
  alert("Arbu, Podes comprarte un Guaymallen");
   alert("y te sobran " + (dineroArbu - 30) + " pesos");
} else if (dineroArbu >= 45 && dineroArbu < 54) {
  alert("Arbu, Podes comprarte un Jorgito");
  alert("y te sobran " + (dineroArbu - 45) + " pesos");
} else if (dineroArbu >= 54 && dineroArbu < 70) {
  alert("Arbu, Podes comprarte un Tofi simple ");
  alert("y te sobran " + (dineroArbu - 54) + " pesos");
} else if (dineroArbu >= 70 && dineroArbu < 85) {
  alert("Arbu, Podes comprarte un Capitan del espacio ");
  alert("y te sobran " + (dineroArbu - 70) + " pesos");
} else if (dineroArbu >= 85 && dineroArbu < 100) {
  alert("Arbu, Podes comprarte un Terrabusi triple");
  alert("y te sobran " + (dineroArbu - 85) + " pesos");
} else if (dineroArbu >= 100) {
  alert("Arbu, Podes comprarte un Milka triple  o un alfajor Pepitos");
  alert("y te sobran " + (dineroArbu - 100) + " pesos");
} else {
  alert("Arbu, no podes comprarte nada");
}

if (dineroFranco >= 30 && dineroFranco < 45) {
  alert("Franco, Podes comprarte un Guaymallen");
} else if (dineroFranco >= 45 && dineroFranco < 54) {
  alert("Franco, Podes comprarte un Jorgito");
} else if (dineroFranco >= 54 && dineroFranco < 70) {
  alert("Franco, Podes comprarte un Tofi simple ");
} else if (dineroFranco >= 70 && dineroFranco < 85) {
  alert("Franco, Podes comprarte un Capitan del espacio ");
} else if (dineroFranco >= 85 && dineroFranco < 100) {
  alert("Franco, Podes comprarte un Terrabusi triple");
} else if (dineroFranco >= 100) {
  alert("Franco, Podes comprarte un Milka triple  o un alfajor Pepitos");
} else {
  alert("Franco, no podes comprarte nada");
} */

// OPCION 2
let plataMarcos = prompt("ingrese el monto que tiene Marcos");
let plataArbi = prompt("ingrese el monto que tiene Arbi");
let plataFranco = prompt("ingrese el monto que tiene Franco");
let alfajorGuaymallen= 30;
let jorgito= 45;
let tofiSimple= 54;
let capitanDelEspacio=70;
let terrabusiTriple= 85;
let milkaTriple=100;
let pepitosTriple=100;
if(plataMarcos>=milkaTriple){
    alert("Marco se puede comprar el alfajor Milka triple o el pepitos Triple");
}else if(plataMarcos>=terrabusiTriple){
    alert("Marco se puede comprar el alfajor Terrabusi Triple");
}else if(plataMarcos>=capitanDelEspacio){
    alert("Marco se puede comprar el alfajor Capitan del espacio");
}else if(plataMarcos>=tofiSimple){
    alert("Marco se puede comprar el alfajor Tofi simple");
}else if(plataMarcos>=jorgito){
    alert("Marco se puede comprar el alfajor jorgito");
}else if(plataMarcos>=alfajorGuaymallen){
    alert("Marco se puede comprar el alfajor guaymallen");
}else{
    alert("No te alcanza para nada");
}
if(plataArbi>=milkaTriple){
    alert("Arbi se puede comprar el alfajor Milka triple o el pepitos Triple");
    alert(`El vuelto de Arbi es de ${plataArbi-milkaTriple}`);
}else if(plataArbi>=terrabusiTriple){
    alert("Arbi se puede comprar el alfajor Terrabusi Triple");
    alert(`El vuelto de Arbi es de ${plataArbi-terrabusiTriple}`);
}else if(plataArbi>=capitanDelEspacio){
    alert("Arbi se puede comprar el alfajor Capitan del espacio");
    alert(`El vuelto de Arbi es de ${plataArbi-capitanDelEspacio}`);
}else if(plataArbi>=tofiSimple){
    alert("Arbi se puede comprar el alfajor Tofi simple");
    alert(`El vuelto de Arbi es de ${plataArbi-tofiSimple}`);
}else if(plataArbi>=jorgito){
    alert("Arbi se puede comprar el alfajor jorgito");
    alert(`El vuelto de Arbi es de ${plataArbi-jorgito}`);
}else if(plataArbi>=alfajorGuaymallen){
    alert("Arbi se puede comprar el alfajor guaymallen");
    alert(`El vuelto de Arbi es de ${plataArbi-alfajorGuaymallen}`);
}else{
    alert("No te alcanza para nada");
}
if(plataFranco>=milkaTriple){
    alert("Franco se puede comprar el alfajor Milka triple o el pepitos Triple");
}else if(plataFranco>=terrabusiTriple){
    alert("Franco se puede comprar el alfajor Terrabusi Triple");
}else if(plataFranco>=capitanDelEspacio){
    alert("Franco se puede comprar el alfajor Capitan del espacio");
}else if(plataFranco>=tofiSimple){
    alert("Franco se puede comprar el alfajor Tofi simple");
}else if(plataFranco>=jorgito){
    alert("Franco se puede comprar el alfajor jorgito");
}else if(plataFranco>=alfajorGuaymallen){
    alert("Franco se puede comprar el alfajor guaymallen");
}else{
    alert("No te alcanza para nada");
}