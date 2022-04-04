let visible = false;
function iniciar(){
    let elemento = document.getElementById("menu-bar");
    
    elemento.addEventListener("click", mostrarMenu);   
}
function mostrarMenu(){
    let menu = document.getElementById("menu");
    menu.classList.toggle("mostrar");
}
window.addEventListener("load", iniciar);

// animado

let animado = document.querySelectorAll(".animado");
function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 800 < scrollTop) {
            animado[i].style.opacity = 1;
        }
        
    }
}
window.addEventListener("scroll",mostrarScroll);

