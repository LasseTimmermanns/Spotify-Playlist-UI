import {CookieService} from "./cookie.service";

export function cookieExists(cookieService: CookieService) {
  return cookieService.getCookie("bearer") != "";
}

export function makeRandom(lengthOfCode: number) {
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
  let text = "";
  for (let i = 0; i < lengthOfCode; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
