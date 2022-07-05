import {CookieService} from "./cookie.service";

export class Util{

  constructor(private cookieService: CookieService) {}

  cookieExists() : boolean{
    return this.cookieService.getCookie("bearer") != "";
  }

}
