import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { DiamondsService } from './diamonds.service';
import { CreateDiamondDto } from './dto/create-diamond.dto';
import { UpdateDiamondDto } from './dto/update-diamond.dto';

@Controller('diamonds')
export class DiamondsController {
  constructor(private readonly diamondsService: DiamondsService) {}

  @Post()
  create(@Body() createDiamondDto: CreateDiamondDto) {
    console.log(createDiamondDto);
    return this.diamondsService.create(createDiamondDto);
  }

  @Get()
  findAll() {
    return this.diamondsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diamondsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDiamondDto: UpdateDiamondDto) {
    return this.diamondsService.update(+id, updateDiamondDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diamondsService.remove(+id);
  }
}
