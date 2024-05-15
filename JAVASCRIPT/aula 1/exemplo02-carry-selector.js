//documnet.querySelector é utilizado para encontrar o primeiro elemento que contenha  seletor
//document.querySelecto ("selector")
//exemplo de seletores
//#idDoElemento
//.classeDoElemento
//input


//criando uma constante elementoh1 que sera atribuido o primeiro elemento que contem a tag h1 
const elementoH1=document.querySelector("h1");
//selecionar o elemento q contenha o id nome

function apresentarNomeCompleto(){
const elementoNome=document.querySelector("#nome");
const elementoSobrenome=document.querySelector("#sobrenome");
// Obter o valor digitado no campo que contem
let nome = elementoNome.value;
let sobrenome = elementoSobrenome.value;
let nomeCompleto = nome+" "+sobrenome

alert("nome completo: " + nomeCompleto)
}