import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_Services/auth.service';
import { Router } from '@angular/router';
import { UserLoginRequest } from '../_Models/Requests/UserLoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  route:String = ""
  req:UserLoginRequest = new UserLoginRequest();

  constructor(private _auth: AuthService, private router:Router){}

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.req).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        if(res.role == "User")
        {
          console.log(1)
          this.route = "/user"
        }
        if(res.role == "Admin")
        {
          console.log(2)
          this.route = "/admin"
        }
        this.router.navigate([this.route])
      },
      err => console.log(err)
    )
  }

  toRegistration() {
    this.router.navigate(["/register"])
  }  
}
