import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlistImgUrl: string = "https://i.scdn.co/image/ab67616d00004851c61fe3be705958234977faaa"
  playlistTitle: string = "Homesick"

  constructor() { }

  ngOnInit(): void {
  }

}
