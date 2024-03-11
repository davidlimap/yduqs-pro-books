const categorias = JSON.parse(localStorage.getItem("categorias")) || [];
const CategoriaRepository = {
    cadastrarCategoria(novaCategoria) {
        categorias.push(novaCategoria);
        console.log(categorias);
        localStorage.setItem("categorias", JSON.stringify(categorias));
    },
    getListaCategoria() {
        const listaCategoria = structuredClone(categorias);
        return listaCategoria;
    }
};
export default CategoriaRepository;
