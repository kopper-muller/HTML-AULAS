const campoTipoPF = document.getElementById("tipoPessoaFisica")
const campoTipoPJ = document.getElementById("tipoPessoaJuridica")
const botaoSalvar = document.getElementById("botao-salvar")

function apresentarCamposPj(){
  apresentarCampos("campos-pj");
  removerCampos("campos-pf");
}
function apresentarCamposPf(){
    apresentarCampos("campos-pf");
    removerCampos("campos-pj");
  }
// funcao   nomefuncao    (parametro)
function apresentarCampos(tipoPessoa){
    const divs = document.getElementsByClassName(tipoPessoa);
    let indice=0;
    while (indice < divs.length){
        let div = divs[indice];
        div.classList.remove("inactive");
        indice = indice + 1;
    }
}
function removerCampos(tipoPessoa){
    const divs = document.getElementsByClassName(tipoPessoa);
    let indice=0;
    while (indice < divs.length){
        let div = divs[indice];
        div.classList.add("inactive");
        indice = indice + 1;
    }
}

function salvarCliente(){
    debugger;
    const nome = document.getElementById("nome").value
    const cpf = document.getElementById("cpf").value
    const dataNascimento = document.getElementById("dataNascimento").value
    const apelido = document.getElementById("apelido").value
    const razaoSocial = document.getElementById("razaoSocial").value
    const cnpj = document.getElementById("cnpj").value

    const novaLinha = document.createElement("tr")
    //criar uma linha nova

    const novaCelulaCodigo = document.createElement("td");
    //criar uma nova table data
    novaCelulaCodigo.innerHTML="2";

    const novaCelulaNome = document.createElement("td");
    //criar uma nova table data
    novaCelulaNome.innerHTML=nome;

// adicionar as tables datas--->(valor constante)//   
    novaLinha.appendChild(novaCelulaCodigo);
    novaLinha.appendChild(novaCelulaNome);

    const tabela = document.getElementsByClassName("table")[0];

    tabela.appendChild(novaLinha);
}

campoTipoPJ.onclick = apresentarCamposPj;
campoTipoPF.onclick = apresentarCamposPf;
botaoSalvar.onclick = salvarCliente;