import { Injectable } from '@angular/core';
import { Api } from '../_Models/Api';
import { Port } from '../_Models/Port';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskParameter } from '../_Models/TaskParameter';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  port:Port = new Port();
  private _getAllApis = "https://localhost:"+this.port.port+"/api/v1/apis"
  private _getApiTasks = "https://localhost:"+this.port.port+"/api/v1/apis/{id}/tasks"
  private _getTaskInfo = "https://localhost:"+this.port.port+"/api/v1/apis/task/{id}/parameters"
    constructor(private http: HttpClient, private _auth:AuthService) { }

  GetApis(){
    let header = new HttpHeaders();
    this._auth.createAuthorizationHeader(header);
    return this.http.get<any>(this._getAllApis, {headers: header});
  }

  GetApiTasks(id){
    let header = new HttpHeaders();
    this._auth.createAuthorizationHeader(header);
    return this.http.get<any>(this._getApiTasks.replace("{id}", id));
  }

  GetTaskParameters(id):Observable<TaskParameter[]>{
    let header = new HttpHeaders();
    this._auth.createAuthorizationHeader(header);
    return this.http.get<any>(this._getTaskInfo.replace("{id}", id));
  }
}
