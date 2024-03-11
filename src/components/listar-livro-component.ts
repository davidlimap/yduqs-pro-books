import { Autor } from "../types/Autor.js";
import AutorRepository from "../types/AutorRepository.js";
import { FormatoData } from "../types/FormatoData.js";
import { Livro } from "../types/Livro.js";
import LivroRepository from "../types/LivroRepository.js";
import { formatarData } from "../utils/formatters.js";

const elementoListaLivro: HTMLElement = document.querySelector("#lista-livro tbody");

renderizarListaLivro();

function renderizarListaLivro(): void {
  const listaLivros: Livro[] = LivroRepository.getListaLivros();
  const listaAutor: Autor[] = AutorRepository.getListaAutores();
  elementoListaLivro.innerHTML = "";
  let htmlLivro: string = "";

  for (let livro of listaLivros) {
    htmlLivro += `
      <tr>
        <td>${livro.titulo}</td>
        <td>${buscarAutor(listaAutor, livro.idAutor)}</td>
        <td>${formatarData(livro.dataPublicacao, FormatoData.PADRAO)}</td>
      </tr>
    `;
  }

  if (!htmlLivro)
    htmlLivro = "<tr><td colspan='2'>Não há autores cadastrados.</td></tr>";

  elementoListaLivro.innerHTML = htmlLivro;
}

function buscarAutor(arr: Autor[], idAutor: string): string {
  return arr.find(item => item.id === idAutor).nome;
}