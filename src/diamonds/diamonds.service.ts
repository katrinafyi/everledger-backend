import { Injectable } from '@nestjs/common';
import { CreateDiamondDto } from './dto/create-diamond.dto';
import { UpdateDiamondDto } from './dto/update-diamond.dto';

import * as crypto from 'crypto';

@Injectable()
export class DiamondsService {
  create(createDiamondDto: CreateDiamondDto) {
    const hash = crypto.createHash('sha256');
    // using an array makes adding additional fields difficult,
    // especially if they are optional.
    // could use an object with specified order as "data" instead.
    const data = [
      createDiamondDto.color,
      createDiamondDto.cut,
      createDiamondDto.clarity,
      createDiamondDto.caratWeight,
    ];
    // JSON.stringify could be inconsistent, particularly with floating-point caratWeight.
    // we use the most minified version (default options) to prevent whitespace differences.
    hash.update(JSON.stringify(data));
    return hash.digest('hex');
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
