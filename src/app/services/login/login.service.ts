import { Injectable } from '@angular/core';
import {CookieService} from "../cookie/cookie.service";
import {UtilityService} from "../utility/utility.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly client_id = "c7d64cf3de454d74a1918847eb72a2cf";
  readonly redirect_uri = "http://localhost:4200/login"
  url: string = "https://accounts.spotify.com/authorize";

  constructor(private utilityService : UtilityService) { }

  requestCode(){
    window.location.replace(
      this.url + "?" +
      "response_type=" + "code" + "&" +
      "client_id=" + this.client_id + "&" +
      "scope=" + "user-read-private" + "&" +
      "redirect_uri=" + this.redirect_uri + "&" +
      "state=" + this.utilityService.makeRandom(16)
    );
  }
}
