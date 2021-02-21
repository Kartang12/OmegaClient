import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SaveTaskRequest } from '../_Models/Requests/SaveTaskRequest';
import { AuthService } from './auth.service';
import { Port } from '../_Models/Port';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  port:Port = new Port();
  private _saveTask:string = "https://localhost:"+this.port.port+"/api/v1/task/save"

  constructor(private http:HttpClient, private _auth:AuthService) { }

  SaveTask(req:SaveTaskRequest){
    let header = new HttpHeaders();
    this._auth.createAuthorizationHeader(header);
    return this.http.post<any>(this._saveTask, req, {headers: header});
  }
}
