import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "../cookie.service";
import * as util from "../util";

@Component({
  selector: 'app-logging-in',
  templateUrl: './logging-in.component.html',
  styleUrls: ['./logging-in.component.css']
})
export class LoggingInComponent implements OnInit {

  client_id: string = "c7d64cf3de454d74a1918847eb72a2cf";
  client_secret: string = "8d3745f0d3ea46eba9067b9bf0f779a4";

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private cookie: CookieService) {}

  ngOnInit(): void {
    if(util.cookieExists(this.cookie)){
      this.router.navigate(["../result"]);
    }else{
      this.doEverythingCauseIDontKnowAsnyc();
    }
  }

  doEverythingCauseIDontKnowAsnyc(){
    this.route.queryParams.subscribe(params => {
      this.getTokenFromCode(params["code"]);
    });
  }

  getTokenFromCode(code: string){
    let idAndSecret: string = btoa(this.client_id + ":" + this.client_secret);
    let headers = {
      "Authorization": "Basic ".concat(idAndSecret),
      "Content-Type": "application/x-www-form-urlencoded"
    };
    let body = "grant_type=authorization_code&code=" + code + "&redirect_uri=http://localhost:4200/login";

    this.http.post<any>("https://accounts.spotify.com/api/token", body, {headers}).subscribe(data => {
      console.log(data.access_token);
      this.cookie.setCookie({name:'bearer', value:data.access_token, expireHours:1 });
      this.router.navigate(["../"]);
    }, (error) => {
      console.log(error);
      this.router.navigate(["../"]);
    });
  }
}
