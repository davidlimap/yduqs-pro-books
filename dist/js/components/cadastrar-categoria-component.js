import CategoriaRepository from "../types/CategoriaRepository.js";
import { gerarHashAleatorio } from "../utils/formatters.js";
const elementoFormulario = document.querySelector(".block-nova-categoria form");
if (elementoFormulario) {
    elementoFormulario.addEventListener("submit", function (event) {
        try {
            event.preventDefault();
            if (!elementoFormulario.checkValidity()) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            const inputNome = elementoFormulario.querySelector("#nome");
            let _nome = inputNome.value;
            const idUnico = gerarHashAleatorio();
            const novaCategoria = {
                id: idUnico,
                nome: _nome,
            };
            CategoriaRepository.cadastrarCategoria(novaCategoria);
            elementoFormulario.reset();
        }
        catch (error) {
            alert("error.message");
        }
    });
}
