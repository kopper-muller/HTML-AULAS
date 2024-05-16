const botaoNumeroPositivo = document.getElementById("numeroPositivo")
const botaoNumeroPar = document.getElementById("numeroPar")
const textareaResultado = document.getElementById("resultado")
const inputNumero1 = document.getElementById("numero1")
const botaoMaior8000 = document.getElementById("numeroMaior8000")

function verificarNumeroPositivo(){
    const numero1 = parseInt(inputNumero1.value);
    
    
    if(numero1>0){
        textareaResultado.value = textareaResultado.value + numero1 + (" Número Positivo\n");
    }else if(numero1<0){
        textareaResultado.value = textareaResultado.value + numero1 +  (" Número nâo é positivo\n");
    }else{  
        textareaResultado.value = textareaResultado.value + numero1 +  (" Número neutro\n")
    }
}

botaoNumeroPositivo.onclick = verificarNumeroPositivo;

function verificarNumeroPar(){
    const numero1 = parseInt(inputNumero1.value);
    
    
    if(numero1 % 2 ===   0){
        textareaResultado.value = textareaResultado.value + numero1 + (" Número Par\n");
    }else if(numero1 % 2 != 0){
        textareaResultado.value = textareaResultado.value + numero1 +  (" Número nâo é par\n");
}
}


function verificarMaior8000(){
    const numero1 = parseInt(inputNumero1.value);

    if(numero1>8000){
        textareaResultado.value = textareaResultado.value + numero1 + (" É maior que 8000\n");
    }
    else if(numero1<8000){
        textareaResultado.value = textareaResultado.value + numero1 + (" É menor que 8000\n");
    }
    else{
        textareaResultado.value = textareaResultado.value + numero1 + (" É igual a 8000\n");
    }
}

botaoNumeroPar.onclick = verificarNumeroPar;