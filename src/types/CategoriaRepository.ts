import { Categoria } from "./Categoria.js";

const categorias: Categoria[] = JSON.parse(localStorage.getItem("categorias")) || [];

const CategoriaRepository = {
  cadastrarCategoria(novaCategoria: Categoria): void {
    categorias.push(novaCategoria);
    console.log(categorias);
    localStorage.setItem("categorias", JSON.stringify(categorias));
  },

  getListaCategoria(): Categoria[] {
    const listaCategoria: Categoria[] = structuredClone(categorias);
    return listaCategoria;
  }
}
export default CategoriaRepository;