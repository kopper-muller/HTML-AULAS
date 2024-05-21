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
let idProximoCliente = 0;
let idAtual = -1;
const campoMascaraCpf = IMask(campoCpf, mascaraCpf);
const campoCnpj = document.getElementById('cnpj');
const mascaraCnpj = {
    mask: '00.000.000/0000-00'
};

const campoMascaraCnpj = IMask(campoCnpj, mascaraCnpj);

function apresentarCamposPj() {
    apresentarCampos("campos-pj");
    removerCampos("campos-pf");
}
function apresentarCamposPf() {
    apresentarCampos("campos-pf");
    removerCampos("campos-pj");
}
// funcao   nomefuncao    (parametro)
function apresentarCampos(tipoPessoa) {
    const divs = document.getElementsByClassName(tipoPessoa);
    let indice = 0;
    while (indice < divs.length) {
        let div = divs[indice];
        div.classList.remove("inactive");
        indice = indice + 1;
    }
}
function removerCampos(tipoPessoa) {
    const divs = document.getElementsByClassName(tipoPessoa);
    let indice = 0;
    while (indice < divs.length) {
        let div = divs[indice];
        div.classList.add("inactive");
        indice = indice + 1;
    }
}

function salvarCliente() {

    const nome = campoNome.value;
    const cpf = campoCpf.value;
    const dataNascimento = campoDataNascimento.value;
    const apelido = campoApelido.value;
    const razaoSocial = campoRazaoSocial.value;
    const cnpj = campoCnpj.value;
    const tipoPessoa = document.querySelector("input[name='tipoPessoa']:checked").value
    if (idAtual == -1) {
        const cliente = cadastrarCliente(nome, cpf, dataNascimento, apelido, razaoSocial, cnpj, tipoPessoa);
        clientes.push(cliente);
    }
    else {
        const cliente = editarCliente(nome, cpf, dataNascimento, apelido, cnpj, razaoSocial, tipoPessoa, idAtual);
    }
    const clientesString = JSON.stringify(clientes);
    localStorage.setItem("clientes", clientesString);
}
function editarCliente(nome, cpf, dataNascimento, apelido, cnpj, razaoSocial, tipoPessoa, idAtual) {
    for (let i = 0; i < clientes.length; i++) {
        let cliente = clientes[i];
        if (cliente.id == idAtual) {
            cliente.nome = nome;
            cliente.cpf = cpf;
            cliente.dataNascimento = dataNascimento;
            cliente.apelido = apelido;
            cliente.cnpj = cnpj;
            cliente.razaoSocial = razaoSocial;
            cliente.tipoPessoa = tipoPessoa;
            limparCampos();
            carregarClientesNaTabela();
            idAtual = -1;
            return cliente;
        }
    }

}
    function cadastrarCliente(nome, cpf, dataNascimento, apelido, razaoSocial, cnpj, tipoPessoa) {
        idProximoCliente += 1;
        criarLinha(idProximoCliente, nome, cpf, dataNascimento, apelido, razaoSocial, cnpj, tipoPessoa);
        limparCampos();

        const cliente = {
            id: idProximoCliente,
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            apelido: apelido,
            cnpj: cnpj,
            razaoSocial: razaoSocial,
            tipoPessoa: tipoPessoa
        };
        return cliente;
    }

    function criarLinha(idCliente, nome, cpf, dataNascimento, apelido, razaoSocial, cnpj, tipoPessoa) {
        const novaLinha = document.createElement("tr")
        console.log(tipoPessoa)
        //criar uma linha nova

        const novaCelulaCodigo = document.createElement("td");
        //criar uma nova table data
        novaCelulaCodigo.innerHTML = idCliente;

        const novaCelulaNome = document.createElement("td");
        //criar uma nova table data
        novaCelulaNome.innerHTML = nome;

        const novaCelulaCPFCNPJ = document.createElement("td");
        if (tipoPessoa === "pf") {
            novaCelulaCPFCNPJ.innerHTML = cpf;
        } else {
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
        novoBotaoEditar.addEventListener("click", editar)
        novoBotaoEditar.setAttribute("data-id", idCliente)

        novoBotaoApagar.appendChild(novoIconeApagar);
        novoBotaoApagar.innerHTML += "apagar";
        novoBotaoApagar.addEventListener("click", apagar)
        novoBotaoApagar.setAttribute("data-id", idCliente)

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

    function editar(event) {
        var target = event.target;
        var id = parseInt(target.getAttribute("data-id"))
        for (let i = 0; i < clientes.length; i++) {
            let cliente = clientes[i];
            if (cliente.id == id) {
                idAtual = cliente.id
                campoNome.value = cliente.nome;
                campoCpf.value = cliente.cpf;
                campoDataNascimento.value = cliente.dataNascimento;
                campoApelido.value = cliente.apelido;
                campoMascaraCnpj.value = cliente.cnpj;
                campoRazaoSocial.value = cliente.razaoSocial;
                let evento = new Event("change")
                if (cliente.tipoPessoa == "pf") {
                    campoTipoPF.checked = true;
                    campoTipoPF.dispatchEvent(evento);
                }
                else {
                    campoTipoPJ.checked = true;
                    campoTipoPJ.dispatchEvent(evento);
                    return;
                }
            }
        }
    }

    function apagar(event) {
        var target = event.target;
        var id = parseInt(target.getAttribute("data-id"))
        for (let i = 0; i < clientes.length; i++) {
            let cliente = clientes[i];
            if (cliente.id == id) {
                clientes.splice(i, 1)
                let clientesString = JSON.stringify(clientes);
                localStorage.setItem("clientes", clientesString);
                carregarClientesNaTabela();
                return;
            }
        }
    }
    function limparCampos() {

        campoNome.value = "";
        campoCpf.value = "";
        campoDataNascimento.value = "";
        campoApelido.value = "";
        campoRazaoSocial.value = "";
        campoCnpj.value = "";
        campoNome.focus();
    }

    function carregarClientesNaTabela() {
        var tbody = document.querySelector("table tbody");
        tbody.innerHTML = "";
        for (let i = 0; i < clientes.length; i++) {
            let cliente = clientes[i];
            criarLinha(
                cliente.id,
                cliente.nome,
                cliente.cpf,
                cliente.dataNascimento,
                cliente.apelido,
                cliente.cnpj,
                cliente.razaoSocial,
                cliente.tipoPessoa)

            if (cliente.id > idProximoCliente)
                idProximoCliente = cliente.id
        }
    }

    function alterartipoPessoa(event) {
        if (campoTipoPF.checked === true)
            apresentarCamposPf();
        else if (campoTipoPJ.checked === true)
            apresentarCamposPj();
    }

    carregarClientesNaTabela();
    campoTipoPJ.onchange = apresentarCamposPj;
    campoTipoPF.onchange = apresentarCamposPf;
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