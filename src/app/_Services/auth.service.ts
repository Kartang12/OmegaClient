import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpResponseBase} from '@angular/common/http'
import { Port } from '../_Models/Port'
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserRegisterRequest } from '../_Models/Requests/UserRegisterRequest';

export const ACCESS_TOKEN = "api_access_token" 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  port:Port = new Port();
  private _registerUrl = "https://localhost:"+this.port.port+"/api/v1/identity/register"
  private _loginUrl = "https://localhost:"+this.port.port+"/api/v1/identity/login"
    constructor(private http: HttpClient,
    private jwtHelper:JwtHelperService) { }

  registerUser(user:UserRegisterRequest){
    return this.http.post<any>(this._registerUrl, user)
  }
  
  isAuthenticated(): boolean{
    let token = localStorage.getItem("token")
    return token && !this.jwtHelper.isTokenExpired(token)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

  logedIn(){

    return false;
  }

  isUser(){
    
    return false;
  }

  isAdmin(){
    
    return false;
  }

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem("token")); 
  }
}
