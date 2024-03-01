import { Autor } from "./Autor.js";

const autores: Autor[] = JSON.parse(localStorage.getItem("autores"), (key: string, value: string) => {
  if (key === "data")
    return new Date(value);

  return value;
}) || [];

const AutorRepository = {
  cadastrarAutor(novoAutor: Autor): void {
    autores.push(novoAutor);
    console.log(autores);
    localStorage.setItem("autores", JSON.stringify(autores));
  },

  getListaAutores(): Autor[] {
    const listaAutores: Autor[] = structuredClone(autores);
    return listaAutores;
  }
}
export default AutorRepository;