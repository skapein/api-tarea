import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LIBROS } from 'src/models/models';
import { ILibros } from './libros.interface';
import { LibrosDTO } from './dto/libros.dto';

@Injectable()
export class LibrosService {
  constructor(
    @InjectModel(LIBROS.name) private readonly model: Model<ILibros>,
  ) {}

  insertar(librosDTO: LibrosDTO): Promise<ILibros> {
    const nuevoLibro = new this.model(librosDTO);
    return nuevoLibro.save();
  }

  todos(): Promise<ILibros[]> {
    return this.model.find().populate('autores');
  }

  uno(id: string): Promise<ILibros> {
    return this.model.findById(id).populate('autores');
  }

  actualizar(id: string, librosDTO: LibrosDTO): Promise<ILibros> {
    return this.model.findByIdAndUpdate(id, librosDTO, { new: true });
  }

  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Libro eliminado' };
  }

  async insertarAutores(librosId: string, autoresId: string): Promise<ILibros> {
    return await this.model
      .findByIdAndUpdate(
        librosId,
        { $addToSet: { autores: autoresId } },
        { new: true },
      )
      .populate('autores');
  }
}
