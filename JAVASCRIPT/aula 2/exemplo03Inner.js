//obter o primeiro elemento que possua o id "#idioma(...)"
const botaoIngles = document.querySelector("#idiomaIngles");
// obter elemento que contenha o id "#idioma(...)"
const botaoPortugues = document.getElementById("idiomaPortugues");
const botaoEspanhol = document.querySelector("#idiomaEspanhol");

//obter elementos com tag h1
const elementosh1 = document.getElementsByTagName("h1")
//obter a primeira tag do vetor h1
const h1 = elementosh1[0]

function removerClassesDeIdioma(){
    h1.classList.remove("titulo-ingles")
    h1.classList.remove("titulo-portugues")
    h1.classList.remove("titulo-espanhol")
}

function alertarIdiomaIngles(){
    h1.innerHTML = "Hello Word";
    removerClassesDeIdioma();
    h1.classList.add("titulo-ingles")
}
botaoIngles.onclick = alertarIdiomaIngles;



function alertarIdiomaEspanhol(){
    h1.innerHTML = "Hola Mundo";
    removerClassesDeIdioma();
    h1.classList.add("titulo-espanhol");
}
botaoEspanhol.onclick = alertarIdiomaEspanhol;



function alertarIdiomaPortugues(){
    h1.innerHTML = "Olá Mundo";
    removerClassesDeIdioma();
    h1.classList.add("titulo-portugues");
}
botaoPortugues.onclick = alertarIdiomaPortugues;