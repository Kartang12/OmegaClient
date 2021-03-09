import { Component, OnInit } from '@angular/core';
import { UserRegisterRequest } from '../_Models/Requests/UserRegisterRequest';
import { AuthService } from '../_Services/auth.service';
import { UserService } from '../_Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _auth:AuthService, 
    private _user:UserService, 
    private router:Router) { }

  errors:string[] = []
  req:UserRegisterRequest = new UserRegisterRequest()

  ngOnInit(): void {
    this._user.getRoleId("User").subscribe(
      res=> {
        this.req.roleId = res.id
      },
      err=> console.log(err)
    )
  }

  registerUser(){
    this._auth.registerUser(this.req).subscribe(
      res=> {
        console.log(res)
        if(res.success == false)
          {
            this.errors = res.errors
            return
          }
          this.router.navigate(["user/apis"]);
        localStorage.setItem('token', res.token)
      },
      err=>{
        console.log(err)
      }
    )
  }

  toLogin() {
    this.router.navigate(["/login"])
  }  

}
