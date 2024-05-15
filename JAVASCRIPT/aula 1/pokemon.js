function dadosPokemon(){
const elementoNome = document.querySelector("#nome")
const elementoPeso = document.querySelector("#peso")
const elementoAltura = document.querySelector("#altura")

let nome=elementoNome.Value
let peso=parseInt(elementoPeso.value)
let altura=parseInt(elementoAltura.value)
let imc = peso / (altura*altura)
let dadosCompletos= "altura: " + elementoAltura.value + " - " + "peso: " + elementoPeso.value + " - " + "nome: " + elementoNome.value 
alert (dadosCompletos + "\nIMC: " + imc)
}