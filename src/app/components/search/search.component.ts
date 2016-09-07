import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../../models/artist";

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {
  private searchStr : string;
  private spotifyService : SpotifyService;
  private searchRes: Artist[];

  constructor(spotifyService : SpotifyService) {
    this.spotifyService = spotifyService;
  }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.artists.items;
      });
  }

  ngOnInit() {
  }

}
