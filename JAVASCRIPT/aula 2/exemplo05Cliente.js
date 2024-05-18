const campoTipoPF = document.getElementById("tipoPessoaFisica")
const campoTipoPJ = document.getElementById("tipoPessoaJuridica")
const botaoSalvar = document.getElementById("botao-salvar")
const campoNome = document.getElementById("nome");
const campoDataNascimento = document.getElementById("dataNascimento");
const campoApelido = document.getElementById("apelido");
const campoRazaoSocial = document.getElementById("razaoSocial");
const campoCpf = document.getElementById('cpf');
const clientes = JSON.parse(localStorage.getItem("clientes")) || []
const mascaraCpf = {
  mask: '000.000.000-00'
};

const campoMascaraCpf = IMask(campoCpf, mascaraCpf);
const campoCnpj = document.getElementById('cnpj');
const mascaraCnpj = {
  mask: '00.000.000/0000-00'
};

const campoMascaraCnpj = IMask(campoCnpj, mascaraCnpj);

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

    const nome = campoNome.value;
    const cpf = campoCpf.value;
    const dataNascimento = campoDataNascimento.value;
    const apelido = campoApelido.value;
    const razaoSocial = campoRazaoSocial.value;
    const cnpj = campoCnpj.value;
    const tipoPessoa = document.querySelector("input[name='tipoPessoa']:checked").value
    criarLinha(nome, cpf, dataNascimento, apelido, razaoSocial, cnpj, tipoPessoa)
    limparCampos();

    const cliente = {
        nome: nome,
        cpf: cpf,
        dataNascimento: dataNascimento,
        apelido: apelido,
        cnpj: cnpj,
        razaoSocial: razaoSocial,   
        tipoPessoa: tipoPessoa
    };
    clientes.push(cliente);
    const clientesString = JSON.stringify(clientes);
    localStorage.setItem("clientes", clientesString);
}

function criarLinha(nome, cpf, dataNascimento, apelido, razaoSocial, cnpj, tipoPessoa){
    const novaLinha = document.createElement("tr")
    console.log(tipoPessoa)
    //criar uma linha nova

    const novaCelulaCodigo = document.createElement("td");
    //criar uma nova table data
    novaCelulaCodigo.innerHTML="2";

    const novaCelulaNome = document.createElement("td");
    //criar uma nova table data
    novaCelulaNome.innerHTML=nome;
    
    const novaCelulaCPFCNPJ = document.createElement("td");
    if (tipoPessoa==="pf") {
        novaCelulaCPFCNPJ.innerHTML = cpf;
    }else{
        novaCelulaCPFCNPJ.innerHTML = cnpj;
    }
    
    const novaCelulaBotoes = document.createElement("td");
    const novoBotaoEditar = document.createElement("button");
    const novoBotaoApagar = document.createElement("button");
    const novoIconeEditar = document.createElement("i");
    const novoIconeApagar = document.createElement("i");

    novoIconeEditar.classList.add("fa-solid", "fa-pencil");
    novoIconeApagar.classList.add("fa-solid", "fa-trash");


    novoBotaoEditar.classList.add("botao-editar");
    novoBotaoApagar.classList.add("botao-apagar");


    novoBotaoEditar.appendChild(novoIconeEditar);
    novoBotaoEditar.innerHTML += "editar";

    novoBotaoApagar.appendChild(novoIconeApagar);
    novoBotaoApagar.innerHTML += "apagar";

    novaCelulaBotoes.appendChild(novoBotaoEditar)
    novaCelulaBotoes.appendChild(novoBotaoApagar)
    novaLinha.appendChild(novaCelulaCodigo);
    novaLinha.appendChild(novaCelulaNome);
    novaLinha.appendChild(novaCelulaCPFCNPJ);
    novaLinha.appendChild(novaCelulaBotoes);

    const tabela = document.getElementsByClassName("table")[0];

    const tbodyDaTabela = tabela.getElementsByTagName("tbody")[0];
    tbodyDaTabela.appendChild(novaLinha);
}

function limparCampos(){

    campoNome.value = "";
    campoCpf.value = "";    
    campoDataNascimento.value = "";
    campoApelido.value = "";
    campoRazaoSocial.value = "";
    campoCnpj.value = "";
    campoNome.focus();
}

function carregarClientesNaTabela(){
    for(let i=0; i < clientes.length; i++){
        let cliente = clientes[i];
        criarLinha(
            cliente.nome,
            cliente.cpf,
            cliente.dataNascimento,
            cliente.apelido,
            cliente.cnpj,
            cliente.razaoSocial,
            cliente.tipoPessoa)
    }
}
carregarClientesNaTabela();
campoTipoPJ.onclick = apresentarCamposPj;
campoTipoPF.onclick = apresentarCamposPf;
botaoSalvar.onclick = salvarCliente;

// Local Storage: é um local que permite armazenar dados sem tempo de expiração
// Create: cadastrar um item por chave nome
// localStorage.setItem("nome", "Francisco Lucas Sens");
// Read: obter um item por chave
// const nomeProfessor = localStorage.getItem("nome");
// Update: atualizar um item por chave
// localStorage.setItem("nome", "Francisco Lucas Janesch Lange Sens");
// Delete: remover um item por chave
// localStorage.removeItem("nome");
