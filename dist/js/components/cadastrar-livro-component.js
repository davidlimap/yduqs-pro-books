import AutorRepository from "../types/AutorRepository.js";
import LivroRepository from "../types/LivroRepository.js";
import CategoriaRepository from "../types/CategoriaRepository.js";
const elementoFormulario = document.querySelector(".block-novo-livro form");
const elementoSelectAutor = document.querySelector("#autor");
const elementoSelectCategoria = document.querySelector("#categoria");
if (elementoFormulario) {
    preencheListaAutor();
    preencheListaCategoria();
}
function preencheListaAutor() {
    const listaAutores = AutorRepository.getListaAutores();
    for (let autor of listaAutores) {
        const option = document.createElement("option");
        option.text = autor.nome;
        option.value = autor.id;
        elementoSelectAutor.add(option);
    }
}
function preencheListaCategoria() {
    const listaCategoria = CategoriaRepository.getListaCategoria();
    for (let categoria of listaCategoria) {
        const option = document.createElement("option");
        option.text = categoria.nome;
        option.value = categoria.id;
        elementoSelectCategoria.add(option);
    }
}
if (elementoFormulario) {
    elementoFormulario.addEventListener("submit", function (event) {
        try {
            event.preventDefault();
            if (!elementoFormulario.checkValidity()) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            const inputTitulo = elementoFormulario.querySelector("#titulo");
            const inputResumo = elementoFormulario.querySelector("#resumo");
            const inputSumario = elementoFormulario.querySelector("#sumario");
            const inputValor = elementoFormulario.querySelector("#valor");
            const inputNumPaginas = elementoFormulario.querySelector("#num-paginas");
            const inputISBN = elementoFormulario.querySelector("#isbn");
            const inputDataPublicacao = elementoFormulario.querySelector("#data-publicacao");
            const inputCategoria = elementoFormulario.querySelector("#categoria");
            const inputAutor = elementoFormulario.querySelector("#autor");
            let _titulo = inputTitulo.value;
            let _resumo = inputResumo.value;
            let _sumario = inputSumario.value;
            let _valor = inputValor.valueAsNumber;
            let _numPaginas = inputNumPaginas.valueAsNumber;
            let _isbn = inputISBN.value;
            let _dataPublicacao = new Date(inputDataPublicacao.value + " 00:00:00");
            let _idAutor = inputAutor.value;
            let _idCategoria = inputCategoria.value;
            if (_resumo.length > 500) {
                alert("O campo Resumo deve conter no máximo 500 caracteres.");
                return;
            }
            if (_sumario.length < 100) {
                alert("O campo Sumário deve conter no mínimo 100 caracteres.");
                return;
            }
            if (_valor < 0) {
                alert("O campo Preço está inválido.");
                return;
            }
            if (_numPaginas <= 0) {
                alert("O campo Número de Páginas deve ser maior que zero.");
                return;
            }
            let dataAtual = new Date();
            if (_dataPublicacao <= new Date(dataAtual + " 00:00:00")) {
                alert("A data de publicação deve ser maior que a data atual.");
                return;
            }
            const novoLivro = {
                titulo: _titulo,
                resumo: _resumo,
                sumario: _sumario,
                valor: _valor,
                numeroPaginas: _numPaginas,
                ISBN: _isbn,
                dataPublicacao: _dataPublicacao,
                idAutor: _idAutor,
                idCategoria: _idCategoria
            };
            LivroRepository.cadastrarLivro(novoLivro);
            elementoFormulario.reset();
        }
        catch (error) {
            alert("error.message");
        }
    });
}
