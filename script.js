var indice = 1; //este valor es para que la primer imagen que se muestre sea la 1
mostrarSlides(indice);

function avanzarSlide(n) { //n = numero indefinido. Porque si avanza al siguiente slide el indice valdría 2, y si se regresa valdría 1
    mostrarSlides(indice += n); //para avanzar al siguiente slide
}

function posicionSlide(n) {
    mostrarSlides(indice = n); //tiene que ser el valor del slide en el que esté
}

function mostrarSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-slide");
    var puntos = document.getElementsByClassName("slider-nav-item");
    
    if(n > slides.length) { //slides.length es para saber cuantas imagenes hay en el carrusel
        indice = 1; //para que vuelva a empezar el carrusel
    }
    
    if(n < 1) { //para que si alguien pueda retroceder
        indice = slides.length();
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //style = Devuelve un objeto que representa el atributo style del elemento
        //este for es para desaparecer todos los elementos
    }
    for(i = 0; i < puntos.length; i++) {
        puntos[i].className = puntos[i].className.replace(" active", ""); //para que cada vez que se cambie el slide, también se cambie el color del puntito, para que sepas en cual slide estás
        //className = llamara al nombre de la clase que se dio
        //replace = reemplazar algo
        //debes poner un espacio antes active porque sino las clases se enciman
    }
    slides[indice-1].style.display = "block"; //queremos que los elementos salgan
    puntos[indice-1].className += " active"; 
}
