import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [];

  create(song:any) {
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    throw new Error('Error do when fetching records');
    return this.songs;
  }
}
