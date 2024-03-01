import { Autor } from "../types/Autor.js";
import AutorRepository from "../types/AutorRepository.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData } from "../utils/formatters.js";

const elementoListaAutores: HTMLElement = document.querySelector("#lista-autor tbody");

renderizarListaAutor();

function renderizarListaAutor(): void {
  const listaAutores: Autor[] = AutorRepository.getListaAutores();
  elementoListaAutores.innerHTML = "";
  let htmlAutor: string = "";

  for (let autor of listaAutores) {
    htmlAutor += `
      <tr>
        <td>${autor.nome}</td>
        <td>${formatarData(autor.data, FormatoData.PADRAO)}</td>
      </tr>
    `;
  }

  if (!htmlAutor)
    htmlAutor = "<tr><td colspan='2'>Não há autores cadastrados.</td></tr>";

  elementoListaAutores.innerHTML = htmlAutor;
}