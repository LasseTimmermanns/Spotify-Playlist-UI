import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ResultDisplayComponent} from "../result-display/result-display.component";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  imgUrl: string = "https://i.scdn.co/image/ab67616d00004851c61fe3be705958234977faaa";
  songTitle: string = "Homesick";
  songArtist: string = "Kane Brown";
  songDuration: string = "3:41";
  songId: string = "";
  spotifyLink: string = "";
  listItem : boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  click() : void{
    if(this.listItem){
      return this.selectItem();
    }
  }

  selectItem() : void{
    ResultDisplayComponent.instance.changeDisplayedSong(this);
  }

}
