import {Component, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SongComponent} from "../song/song.component";

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit{

  @ViewChild('displaySong', {read: ViewContainerRef}) displaySong! : ViewContainerRef;
  @ViewChild('outerList', {read: ViewContainerRef}) outerList! : ViewContainerRef;
  static instance : ResultDisplayComponent;

  constructor() { }

  changeDisplayedSong(song : SongComponent){
    this.clearContainer();
    this.setDisplayedSong(song.songTitle, song.songDuration, song.songArtist, song.imgUrl, song.songId, song.spotifyLink);
  }

  private setDisplayedSong(songTitle : string, songDuration : string, songArtist : string, imgUrl : string, songId : string, spotifyLink : string) : ComponentRef<SongComponent>{
    const component : ComponentRef<SongComponent> = this.displaySong.createComponent(SongComponent);
    component.instance.songTitle = songTitle;
    component.instance.songDuration = songDuration;
    component.instance.songArtist = songArtist;
    component.instance.imgUrl = imgUrl;
    component.instance.songId = songId;
    component.instance.spotifyLink = spotifyLink;
    component.instance.listItem = false;
    return component;
  }

  private clearContainer() : void{

    while(this.displaySong.length > 0){
      this.displaySong.clear();
    }
  }

  ngOnInit(): void {
    ResultDisplayComponent.instance = this;
  }

}
