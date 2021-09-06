import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ServiceApiService {
  
    url:any="https://6135bff960d2900017c3c0d0.mockapi.io/api/v1/"

  constructor(private http: HttpClient) {}
    
    getData(){
        return this.http.get(this.url+"contacts")
    }

    getSingleUserData(id:any) {
        return this.http.get(this.url+"contacts/"+id)
    }  
}



