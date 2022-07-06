import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router : Router) { }

  navigate(url: string){
    this.router.navigate([url]).then(r => {
      if(!r){
        throw new Error("Routing not possible with url " + url);
      }
    });
  }

}
