import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as util from "../util";
import {cookieExists} from "../util";
import {CookieService} from "../cookie.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  status: string = "";
  cookieExists : boolean = false;
  readonly client_id = "c7d64cf3de454d74a1918847eb72a2cf";
  readonly redirect_uri = "http://localhost:4200/login"
  url: string = "https://accounts.spotify.com/authorize";

  auth(){
    if(this.cookieExists) {
      this.cookieService.deleteCookie("bearer");
      window.location.reload();
    }else{
      this.requestCode();
    }
  }

  requestCode(){
    window.location.replace(
      this.url + "?" +
      "response_type=" + "code" + "&" +
      "client_id=" + this.client_id + "&" +
      "scope=" + "user-read-private" + "&" +
      "redirect_uri=" + this.redirect_uri + "&" +
      "state=" + util.makeRandom(16)
    );
  }


  constructor(private cookieService : CookieService) {}

  ngOnInit() {
    if(cookieExists(this.cookieService)) {
      this.cookieExists = true;
      this.status = "Logged In"
    }else{
      this.cookieExists = false;
      this.status = "Login";
    }
  }

}
