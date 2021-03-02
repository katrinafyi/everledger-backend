import { Injectable } from '@nestjs/common';
import { CreateDiamondDto } from './dto/create-diamond.dto';
import { UpdateDiamondDto } from './dto/update-diamond.dto';

@Injectable()
export class DiamondsService {
  create(createDiamondDto: CreateDiamondDto) {
    return 'This action adds a new diamond';
  }

  findAll() {
    return `This action returns all diamonds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diamond`;
  }

  update(id: number, updateDiamondDto: UpdateDiamondDto) {
    return `This action updates a #${id} diamond`;
  }

  remove(id: number) {
    return `This action removes a #${id} diamond`;
  }
}
