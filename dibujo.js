var texto =document.getElementById("texto_lineas");
var boton =document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);

const d = document.getElementById("dibujito");
var ancho = d.width;
let lienzo = d.getContext("2d");

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
    
function dibujoPorClick()
{
var lineas = parseInt(texto.value);
var l = 0;
let yi, xf;
let yf,xi;        
let nxf,nyf; 
let colorcito ="#FAA";
var espacio = ancho / lineas;

for(l = 0; l < lineas; l++)
{
yi = espacio *(l+1);
xi = espacio*l;
yf =espacio *(l+1);
nxf =ancho-xf;
nyf =ancho-yf;
xf = espacio *l;

dibujarLinea(colorcito,xi,299,299,nyf);
dibujarLinea(colorcito,0,xf,nxf,0);
dibujarLinea(colorcito,299,xf,yi,0);
dibujarLinea(colorcito,0,yi,xf,299); 
console.log("linea"+l);
}
dibujarLinea(colorcito,1,1,1,299);
dibujarLinea("orange",299,299,299,1);
}
      



