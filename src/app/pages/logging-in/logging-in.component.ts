import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "../../services/cookie/cookie.service";
import {UtilityService} from "../../services/utility/utility.service";
import {HttpService} from "../../services/http/http.service";
import {RouterService} from "../../services/router/router.service";

@Component({
  selector: 'app-logging-in',
  templateUrl: './logging-in.component.html',
  styleUrls: ['./logging-in.component.css']
})
export class LoggingInComponent implements OnInit {

  client_id: string = "c7d64cf3de454d74a1918847eb72a2cf";
  client_secret: string = "8d3745f0d3ea46eba9067b9bf0f779a4";
  idAndSecret: string = btoa(this.client_id + ":" + this.client_secret);
  httpOptions = {
    headers: new HttpHeaders({
      "Authorization": "Basic ".concat(this.idAndSecret),
      "Content-Type": "application/x-www-form-urlencoded"
    }),
  };

  constructor(private route: ActivatedRoute, private utilityService : UtilityService, private routerService : RouterService, private http : HttpClient, private httpService: HttpService, private cookieService: CookieService) {}

  ngOnInit(): void {
    if(this.cookieService.cookieExists()){
      this.routerService.navigate("../result");
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
    let httpBody: string = "grant_type=authorization_code&code=" + code + "&redirect_uri=http://localhost:4200/login";
    this.httpService.post("https://accounts.spotify.com/api/token", httpBody, this.httpOptions).subscribe((data: { access_token: any; }) => {
      console.log(data.access_token);
      this.cookieService.setCookie({name:'bearer', value:data.access_token, expireHours:1 });
      this.routerService.navigate("../");
    }, (error: any) => {
      console.log(error);
      this.routerService.navigate("../");
    });
  }
}
