import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SpotifyService {
  private searchUrl : string;

  constructor (private http : Http) {

  }

  searchMusic(str: string, type="artist") {
    this.searchUrl="https://api.spotify.com/v1/search?q=" + str + "&type="+type;

    return this.http.get(this.searchUrl)
      .map(res => res.json());
  }
}
