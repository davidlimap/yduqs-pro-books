import { Autor } from "./Autor.js";
import { Categoria } from "./Categoria.js";

export type Livro = {
  titulo: string;
  resumo: string;
  sumario: string;
  valor: number;
  numeroPaginas: number;
  ISBN: string;
  dataPublicacao: Date;
  idCategoria: Categoria["id"];
  idAutor: Autor["id"];
}