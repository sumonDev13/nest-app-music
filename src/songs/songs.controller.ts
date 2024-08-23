import { CreateSongDTO } from './dto/create-song-dto';
import { SongsService } from './songs.service';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put} from '@nestjs/common';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }
  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (e) {
      throw new HttpException('server error',HttpStatus.INTERNAL_SERVER_ERROR, {
        cause:e
      });
    }
    
  }
  @Get(':id')
  findOne(
    @Param('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id:number
  ) {
    return `fetch songs based on id: ${typeof id}`;
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
