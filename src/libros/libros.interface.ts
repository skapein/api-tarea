import { IAutores } from "src/autores/autores.interface";

export interface ILibros {
    titulo: string;
    genero: string;
    anio_publicacion: Date;
    editorial: string;
    autores: IAutores[];
  }