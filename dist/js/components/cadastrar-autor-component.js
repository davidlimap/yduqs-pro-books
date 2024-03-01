import AutorRepository from "../types/AutorRepository.js";
const elementoFormulario = document.querySelector(".block-novo-autor form");
if (elementoFormulario) {
    elementoFormulario.addEventListener("submit", function (event) {
        try {
            event.preventDefault();
            if (!elementoFormulario.checkValidity()) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            const inputNome = elementoFormulario.querySelector("#nome");
            const inputEmail = elementoFormulario.querySelector("#email");
            const inputBiografia = elementoFormulario.querySelector("#biografia");
            let _nome = inputNome.value;
            let _email = inputEmail.value;
            let _biografia = inputBiografia.value;
            const isValidMail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
            if (!isValidMail.test(_email)) {
                alert("Email inválido.");
            }
            if (_biografia.length < 100) {
                alert("O campo biografia deve conter no mínimo 100 caracteres.");
                return;
            }
            else if (_biografia.length > 500) {
                alert("O campo biografia deve conter no máximo 500 caracteres.");
                return;
            }
            const novoAutor = {
                nome: _nome,
                email: _email,
                biografia: _biografia,
                data: new Date()
            };
            AutorRepository.cadastrarAutor(novoAutor);
            elementoFormulario.reset();
        }
        catch (error) {
            alert("error.message");
        }
    });
}
