let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){

    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("ilustrator");
        habilidades[1].classList.add("photoshop");
        habilidades[2].classList.add("HTML-y-CSS");
        habilidades[3].classList.add("premiere");
        habilidades[4].classList.add("Paquete-Microsoft");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("community");
        habilidades[9].classList.add("proyect");
    }
}



window.onscroll = function(){
    efectoHabilidades();
} 