import {Component, OnInit} from '@angular/core';
import {CookieService} from "../../../services/cookie/cookie.service";
import {LoginService} from "../../../services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status: string = "";
  cookieExists: boolean = false;

  auth() {
    if (this.cookieExists) {
      this.cookieService.deleteCookie("bearer");
      window.location.reload();
    } else {
      this.loginService.requestCode();
    }
  }

  constructor(private cookieService: CookieService, private loginService: LoginService) {}

  ngOnInit() {
    if (this.cookieService.cookieExists()) {
      this.cookieExists = true;
      this.status = "Logged In";
    } else {
      this.cookieExists = false;
      this.status = "Login";
    }
  }

}
