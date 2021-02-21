import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_Services/user.service';
import { User } from '../../_Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _userService:UserService) { }

  users:User[]

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(
      res => this.users = res,
      err => console.log(err))
  }

  deleteUser(id:string){
    this._userService.deleteUser(id).subscribe()
  }

}
