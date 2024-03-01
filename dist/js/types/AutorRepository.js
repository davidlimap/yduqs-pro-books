const autores = JSON.parse(localStorage.getItem("autores"), (key, value) => {
    if (key === "data")
        return new Date(value);
    return value;
}) || [];
const AutorRepository = {
    cadastrarAutor(novoAutor) {
        autores.push(novoAutor);
        console.log(autores);
        localStorage.setItem("autores", JSON.stringify(autores));
    },
    getListaAutores() {
        const listaAutores = structuredClone(autores);
        return listaAutores;
    }
};
export default AutorRepository;
