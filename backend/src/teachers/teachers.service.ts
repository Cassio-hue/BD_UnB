import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CRUD } from '../utils/crud_sql';
import { DepartmentsService } from '../departments/departments.service';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeachersService {
  CRUD: CRUD;
  DepartmentCRUD: DepartmentsService;
  table_name = 'teacher';
  constructor(@InjectKnex() private readonly knex: Knex) {
    this.knex = knex;
    this.CRUD = new CRUD(this.knex, this.table_name);
    this.DepartmentCRUD = new DepartmentsService(this.knex);
  }

  async create(createTeacherDto: CreateTeacherDto) {
    await this.DepartmentCRUD.checkDepartmentId(
      createTeacherDto.department_code,
    );
    await this.CRUD.create(createTeacherDto).catch((err) => {
      if (err.code == '23505')
        throw new UnprocessableEntityException(err.detail);
      else throw new BadRequestException('Algo deu errado ao criar professor');
    });
    return 'Professor adicionado com sucesso';
  }

  async findAll() {
    return await this.CRUD.findAll()
      .catch(() => {
        throw new BadRequestException(`Erro ao tentar listar professores`);
      })
      .then((res) => res);
  }

  async findOne(id: number) {
    return await this.CRUD.findOne({ id })
      .catch(() => {
        throw new BadRequestException(
          `Erro ao tentar encontrar professor pelo id = ${id}`,
        );
      })
      .then((res) => {
        if (res.length == 0)
          throw new NotFoundException('Id fornecido não foi encontrado');
        return res;
      });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    await this.checkTeacherId(id);
    await this.CRUD.update(id, updateTeacherDto).catch((err) => {
      if (err.code == '23505')
        throw new UnprocessableEntityException(err.detail);
      else
        throw new BadRequestException('Algo deu errado ao atualizar professor');
    });
    return 'Professor atualizado com sucesso';
  }

  async remove(id: number) {
    await this.checkTeacherId(id);
    await this.CRUD.delete(id).catch((err) => {
      if (err.code == '23503')
        throw new UnprocessableEntityException(err.detail);
      else throw new BadRequestException(`Erro ao tentar remover professor.`);
    });
    return 'Professor removido com sucesso';
  }

  async checkTeacherId(id: number) {
    const teacher = await this.findOne(id);
    if (teacher.length == 0)
      throw new NotFoundException('Id fornecido não foi encontrado');
  }
}
