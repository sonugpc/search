import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { rejects } from 'assert';
const headers = {
  'api-key': '73973DDA32BF0505E54B995190FF5C56'
}
@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {
  sm:any;
  public url:string="https://searchdoc1.search.windows.net/indexes/search/docs?api-version=2020-06-30&search=";

  //public url:string="https://textanalysisbackend.azurewebsites.net/"

  constructor(private _http:HttpClient) { 

  }
  public getDetails(payload) {
    return new Promise((resolve, reject) => {
      
      this._http.get(this.url + "api",payload)
      .subscribe((result: any) => {
        if (result.status == 'error') {
          
           }
         else {
         console.log(result);
          resolve( result)
        }
      
    })
  
  
  })}
  public getResults(payload) {
    return new Promise((resolve, reject) => {

      this._http.get(this.url+payload,{headers:headers})
      .subscribe((result: any) => {
        resolve(result);
        this.sm=result;
      
    })
  
  
  }
  )}
 
}

