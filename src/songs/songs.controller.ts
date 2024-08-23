import { SongsService } from './songs.service';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create('Animals By Arijit Singles');
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
  }
  @Get(':id')
  findOne() {
    return 'find one song';
  }
  @Put(':id')
  update() {
    return 'update song';
  }
  @Delete(':id')
  delete() {
    return 'delete song';
  }
}
