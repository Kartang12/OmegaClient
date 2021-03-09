import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SaveTaskRequest } from '../_Models/Requests/SaveTaskRequest';
import { AuthService } from './auth.service';
import { Port } from '../_Models/Port';
import { UserTaskUpdateRequest } from '../_Models/Requests/UserTaskUpdateRequest';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  port:Port = new Port();
  private _saveTask:string = "https://localhost:"+this.port.port+"/api/v1/task/save"
  private _getMyTasks:string = "https://localhost:"+this.port.port+"/api/v1/tasks/user"
  private _getUserTaskParameters:string = "https://localhost:"+this.port.port+"/api/v1/task/{id}/parameters"
  private _updateUserTask:string = "https://localhost:"+this.port.port+"/api/v1/task/update"
  private _deleteTask:string = "https://localhost:"+this.port.port+"/api/v1/task/dismiss/{id}"

  constructor(private http:HttpClient, private _auth:AuthService) { }

  SaveTask(req:SaveTaskRequest){
    let header = new HttpHeaders();
    this._auth.createAuthorizationHeader(header);
    return this.http.post<any>(this._saveTask, req, {headers: header});
  }

  GetMyTasks(){
    let header = new HttpHeaders();
    this._auth.createAuthorizationHeader(header);
    return this.http.get<any>(this._getMyTasks, {headers: header});
  }

  GetUserTaskParameters(taskId:number){
    let header = new HttpHeaders();
    this._auth.createAuthorizationHeader(header);
    return this.http.get<any>(this._getUserTaskParameters.replace("{id}", taskId.toString()), {headers: header});
  }

  UpdateTask(req:UserTaskUpdateRequest){
    let header = new HttpHeaders();
    this._auth.createAuthorizationHeader(header);
    return this.http.put<any>(this._updateUserTask, req , {headers: header});
  }

  DismissTask(taskId:number){
    let header = new HttpHeaders();
    this._auth.createAuthorizationHeader(header);
    return this.http.delete<any>(this._deleteTask.replace("{id}", taskId.toString()), {headers: header});
  }
}
