import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAutores } from './autores.interface';
import { AUTORES } from 'src/models/models';
import { AutoresDTO } from './dto/autores.dto';

@Injectable()
export class AutoresService {
  constructor(
    @InjectModel(AUTORES.name) private readonly model: Model<IAutores>,
  ) {}

  async insertar(autoresDTO: AutoresDTO): Promise<IAutores> {
    const newAutores = new this.model(autoresDTO);
    return await newAutores.save();
  }
  async todos(): Promise<IAutores[]> {
    return await this.model.find();
  }
  async uno(id: string): Promise<IAutores> {
    return await this.model.findById(id);
  }
  async actualizar(
    id: string,
    autoresDTO: AutoresDTO,
  ): Promise<IAutores> {
    return await this.model.findByIdAndUpdate(id, autoresDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, message: 'Eliminado' };
  }
}