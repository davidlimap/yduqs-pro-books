import { Autor } from "../types/Autor.js";
import { Categoria } from "../types/Categoria.js";
import { Livro } from "../types/Livro.js";
import AutorRepository from "../types/AutorRepository.js";
import LivroRepository from "../types/LivroRepository.js";
import CategoriaRepository from "../types/CategoriaRepository.js";

const elementoFormulario = document.querySelector(".block-novo-livro form") as HTMLFormElement;
const elementoSelectAutor: HTMLSelectElement = document.querySelector("#autor");
const elementoSelectCategoria: HTMLSelectElement = document.querySelector("#categoria");

if (elementoFormulario) {
  preencheListaAutor();
  preencheListaCategoria();
}

function preencheListaAutor(): void {
  const listaAutores: Autor[] = AutorRepository.getListaAutores();
  for (let autor of listaAutores) {
    const option = document.createElement("option") as HTMLOptionElement;
    option.text = autor.nome;
    option.value = autor.id;
    elementoSelectAutor.add(option);
  }
}

function preencheListaCategoria(): void {
  const listaCategoria: Categoria[] = CategoriaRepository.getListaCategoria();
  for (let categoria of listaCategoria) {
    const option = document.createElement("option") as HTMLOptionElement;
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

      const inputTitulo = elementoFormulario.querySelector("#titulo") as HTMLInputElement;
      const inputResumo = elementoFormulario.querySelector("#resumo") as HTMLInputElement;
      const inputSumario = elementoFormulario.querySelector("#sumario") as HTMLInputElement;
      const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
      const inputNumPaginas = elementoFormulario.querySelector("#num-paginas") as HTMLInputElement;
      const inputISBN = elementoFormulario.querySelector("#isbn") as HTMLInputElement;
      const inputDataPublicacao = elementoFormulario.querySelector("#data-publicacao") as HTMLInputElement;
      const inputCategoria = elementoFormulario.querySelector("#categoria") as HTMLSelectElement;
      const inputAutor = elementoFormulario.querySelector("#autor") as HTMLSelectElement;

      let _titulo: string = inputTitulo.value;
      let _resumo: string = inputResumo.value;
      let _sumario: string = inputSumario.value;
      let _valor: number = inputValor.valueAsNumber;
      let _numPaginas: number = inputNumPaginas.valueAsNumber;
      let _isbn: string = inputISBN.value;
      let _dataPublicacao: Date = new Date(inputDataPublicacao.value + " 00:00:00");
      let _idAutor: string = inputAutor.value;
      let _idCategoria: string = inputCategoria.value;

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

      const novoLivro: Livro = {
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

    } catch (error) {
      alert("error.message");
    }
  });
}
