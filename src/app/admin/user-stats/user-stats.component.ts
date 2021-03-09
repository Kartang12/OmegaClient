import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_Services/user.service';
import { UserStats } from 'src/app/_Models/UserStats';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnInit {

  constructor(private _userService:UserService) { }

  usersStats:UserStats[] = []

  ngOnInit(): void {
    this.getUsersStats()
  }

  getUsersStats(){
    this._userService.getUsersStats().subscribe(
      res=> this.usersStats = res,
      err=> console.log(err)
    )
  }

}
