var imagenes = []; //arreglo de imágenes
imagenes[0] = 'images/1.jpg';
imagenes[1] = 'images/2.jpg';
imagenes[2] = 'images/3.jpg';

var indiceImagenes = 0;
var tiempo = 2000; //el código se coloca en milisegundos, 2000 = 2 segundo

function cambiarImagenes(){
	document.getElementsByClassName("slider-slides-wrapper").src = imagenes[indiceImagenes];
	
	if(indiceImagenes < 2){
		indiceImagenes++;
	}else{
		indiceImagenes = 0;
	}
}

setInterval(cambiarImagenes, tiempo); //función propia de java script para que algo ocurra en un intervalo de tiempo

cambiarImagenes();
