export interface IAutores extends Document{
    nombre: string;    
    nacionalidad: string;
    anio_nacimiento: Date;
    genero: string;
    autores: IAutores;

  }