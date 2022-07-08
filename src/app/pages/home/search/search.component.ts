import {
  Component,
  ComponentFactoryResolver,
  ComponentRef, ElementRef,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CookieService} from "../../../services/cookie/cookie.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SongComponent} from "../song/song.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('suggestions', {read: ViewContainerRef}) suggestions! : ViewContainerRef;

  add : boolean = true;
  limit : number = 6;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  isEmptyOrSpaces(str : string){
    return str === null || str.match(/^ *$/) !== null;
  }


  search(query: string) {
    if(this.isEmptyOrSpaces(query)){
      console.log("Query is not valid");
      return;
    }
    let bearer = this.cookieService.getCookie("bearer");
    this.removeSongs(false);
    this.httpClient.get<any>("http://localhost:8080/api/query?bearer=" + bearer + "&query=" + encodeURIComponent(query) + "&limit=" + this.limit).subscribe(data => {
      for(let i = 0; i < data.length; i++){
        this.addSong(data[i].title, data[i].duration, data[i].artist, data[i].imgurl, data[i].songid);
      }
      this.removeSongs(true);
    });
  }

  addSong(songTitle : string, songDuration : string, songArtist : string, imgUrl : string, songId : string) : ComponentRef<SongComponent>{
    const component : ComponentRef<SongComponent> = this.suggestions.createComponent(SongComponent);
    console.log(songArtist);
    component.instance.songTitle = songTitle;
    component.instance.songDuration = songDuration;
    component.instance.songArtist = songArtist;
    component.instance.imgUrl = imgUrl;
    component.instance.songId = songId;
    component.instance.listItem = true;
    component.instance.getIt();
    return component;
  }

  removeSongs(keepLimit : boolean) : void{
    let keep = keepLimit ? this.limit : 0;
    while(this.suggestions.length > keep){
      this.suggestions.get(0)?.destroy();
    }
  }
}
