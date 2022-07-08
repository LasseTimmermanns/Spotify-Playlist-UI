import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient : HttpClient) { }

  post(url : string, body : string, headers : object) : any{
    return this.httpClient.post(url, body, headers);
  }

  get(url : string, options? : object) : any{
    if(options){
      return this.httpClient.get(url, options);
    }else{
      return this.httpClient.get(url, {});
    }
  }

}
