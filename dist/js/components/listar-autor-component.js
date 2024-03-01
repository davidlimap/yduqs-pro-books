import AutorRepository from "../types/AutorRepository.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData } from "../utils/formatters.js";
const elementoListaAutores = document.querySelector("#lista-autor tbody");
renderizarListaAutor();
function renderizarListaAutor() {
    const listaAutores = AutorRepository.getListaAutores();
    elementoListaAutores.innerHTML = "";
    let htmlAutor = "";
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
