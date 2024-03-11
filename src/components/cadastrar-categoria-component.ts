import { Categoria } from "../types/Categoria.js";
import CategoriaRepository from "../types/CategoriaRepository.js";
import { gerarHashAleatorio } from "../utils/formatters.js";

const elementoFormulario = document.querySelector(".block-nova-categoria form") as HTMLFormElement;
if (elementoFormulario) {
  elementoFormulario.addEventListener("submit", function (event) {
    try {
      event.preventDefault();

      if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const inputNome = elementoFormulario.querySelector("#nome") as HTMLInputElement;

      let _nome: string = inputNome.value;

      const idUnico: string = gerarHashAleatorio();

      const novaCategoria: Categoria = {
        id: idUnico,
        nome: _nome,
      };

      CategoriaRepository.cadastrarCategoria(novaCategoria);
      elementoFormulario.reset();

    } catch (error) {
      alert("error.message");
    }
  });
}
