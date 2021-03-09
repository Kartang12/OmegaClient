import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { UserData } from './Models/Responses/UserData';

import {HttpResponseBase} from '@angular/common/http'
import { Port } from '../_Models/Port';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  port:Port = new Port();
  private _getRoleId = "https://localhost:"+this.port.port+"/api/v1/role/{roleName}"
  private _getUsersStats = "https://localhost:"+this.port.port+"/api/v1/stats/users"
  constructor(private http: HttpClient) { }

  getRoleId(roleName:string){
    return this.http.get<any>(this._getRoleId.replace("{roleName}", roleName))
  }

  getUsersStats(){
    return this.http.get<any>(this._getUsersStats)
  }
}
