import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LibrosService } from './libros.service';
import { AutoresService } from 'src/autores/autores.service';
import { LibrosDTO } from './dto/libros.dto';

@ApiTags('libros')
@Controller('api/v1/libros')
export class LibrosController {
  constructor(
    private readonly librosService: LibrosService,
    private readonly autoresService: AutoresService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crea Libro' })
  insertar(@Body() librosDTO: LibrosDTO) {
    return this.librosService.insertar(librosDTO);
  }

  @Get()
  @ApiOperation({ summary: 'Selecciona todos los Libros' })
  todos() {
    return this.librosService.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.librosService.uno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() librosDTO: LibrosDTO) {
    return this.librosService.actualizar(id, librosDTO);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.librosService.eliminar(id);
  }

  @Post(':librosId/autores/:autoresId')
  async agregarAutores(
    @Param('librosId') librosId: string,
    @Param('autoresId') autoresId: string,
  ) {
    const autores = await this.autoresService.uno(autoresId);
    if (!autores)
      throw new HttpException('Autores not found', HttpStatus.NOT_FOUND);
    return this.librosService.insertarAutores(librosId, autoresId);
  }
}
