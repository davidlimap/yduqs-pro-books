const livros = JSON.parse(localStorage.getItem("livros"), (key, value) => {
    if (key === "data")
        return new Date(value);
    return value;
}) || [];
const LivroRepository = {
    cadastrarLivro(novoLivro) {
        livros.push(novoLivro);
        console.log(livros);
        localStorage.setItem("livros", JSON.stringify(livros));
    },
    getListaLivros() {
        const listaLivros = structuredClone(livros);
        return listaLivros;
    }
};
export default LivroRepository;
