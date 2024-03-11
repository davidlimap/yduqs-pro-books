import { Autor } from "../types/Autor.js";
import AutorRepository from "../types/AutorRepository.js";
import { gerarHashAleatorio } from "../utils/formatters.js";

const elementoFormulario = document.querySelector(".block-novo-autor form") as HTMLFormElement;
if (elementoFormulario) {
  elementoFormulario.addEventListener("submit", function (event) {
    try {
      event.preventDefault();

      if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const inputNome = elementoFormulario.querySelector("#nome") as HTMLInputElement;
      const inputEmail = elementoFormulario.querySelector("#email") as HTMLInputElement;
      const inputBiografia = elementoFormulario.querySelector("#biografia") as HTMLInputElement;

      let _nome: string = inputNome.value;
      let _email: string = inputEmail.value;
      let _biografia: string = inputBiografia.value;

      const isValidMail: RegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;

      if (!isValidMail.test(_email)) {
        alert("Email inválido.");
      }

      if (_biografia.length < 100) {
        alert("O campo biografia deve conter no mínimo 100 caracteres.");
        return;
      } else if (_biografia.length > 500) {
        alert("O campo biografia deve conter no máximo 500 caracteres.");
        return;
      }

      const idUnico: string = gerarHashAleatorio();

      const novoAutor: Autor = {
        id: idUnico,
        nome: _nome,
        email: _email,
        biografia: _biografia,
        data: new Date()
      };

      AutorRepository.cadastrarAutor(novoAutor);
      elementoFormulario.reset();

    } catch (error) {
      alert("error.message");
    }
  });
}
