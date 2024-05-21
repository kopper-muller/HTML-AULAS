document.getElementById("categoriaForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const categoriaNome = document.getElementById("nome").valueMax;
    criarCategoria(categoriaNome);
});

function criarCategoria(nome) {
    fetch("http://localhost:3000/categorias", {
        method: "POST",
        headers:
        {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome: nome })
    })
        .then(response => response.json())
        .then(() => {
            alert("categoria cadastrada com sucesso");
        })
        .catch(error => alert("ocorreu um erro ao cadastrar"));
}

function buscarCategorias(){
    fatch("http://localhost:3000/categorias", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(categorias =>{
        for (let i = 0; i < categorias.length; i++) {
            let categoria = caegorias [i];
            console.log(categoria.id+ "=>" + categoria.nome);
        }
    })
}