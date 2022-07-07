import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  imgUrl: string = "https://i.scdn.co/image/ab67616d00004851c61fe3be705958234977faaa"
  songTitle: string = "Homesick"
  songArtist: string = "Kane Brown"
  songDuration: string = "3:41"

  constructor() { }

  ngOnInit(): void {
  }

}
