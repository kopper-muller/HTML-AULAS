function dadosLogin(){
    const elementoNome = document.querySelector("#nome")
    const elementoSenha = document.querySelector("#senha")
    let nome=elementoNome.Value
    let senha=elementoSenha.Value
    let dadosCompletos= "nome: " + elementoNome.value + " - " + "senha: " + elementoSenha.value
    alert ( dadosCompletos)
    }