import { Livro } from "./Livro.js";

const livros: Livro[] = JSON.parse(localStorage.getItem("livros"), (key: string, value: string) => {
  if (key === "data")
    return new Date(value);

  return value;
}) || [];

const LivroRepository = {
  cadastrarLivro(novoLivro: Livro): void {
    livros.push(novoLivro);
    console.log(livros);
    localStorage.setItem("livros", JSON.stringify(livros));
  },

  getListaLivros(): Livro[] {
    const listaLivros: Livro[] = structuredClone(livros);
    return listaLivros;
  }
}
export default LivroRepository;