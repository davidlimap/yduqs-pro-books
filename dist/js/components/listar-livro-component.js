import AutorRepository from "../types/AutorRepository.js";
import { FormatoData } from "../types/FormatoData.js";
import LivroRepository from "../types/LivroRepository.js";
import { formatarData } from "../utils/formatters.js";
const elementoListaLivro = document.querySelector("#lista-livro tbody");
renderizarListaLivro();
function renderizarListaLivro() {
    const listaLivros = LivroRepository.getListaLivros();
    const listaAutor = AutorRepository.getListaAutores();
    elementoListaLivro.innerHTML = "";
    let htmlLivro = "";
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
function buscarAutor(arr, idAutor) {
    return arr.find(item => item.id === idAutor).nome;
}
