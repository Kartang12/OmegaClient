import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExcersiseService } from 'src/app/_Services/excersise.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Excersise } from 'src/app/_Models/Excersise';
import { ExcersiseAnswerRequest } from 'src/app/_Models/Requests/ExcersiseAnswerRequest';
import { StudentExcersise } from 'src/app/_Models/StudentExercise';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  private routeSubscription: Subscription;
  constructor(
    private _exService: ExcersiseService, 
    private _router: Router, 
    private route:ActivatedRoute) { 
    this.routeSubscription = route.params.subscribe(params => this.taskId = params['id']);
  }
    flag:boolean = false

    loaded:boolean = false

    // checkEx:CheckExRequest 

    taskId:string
    ex:Excersise
    answer:string

    complete:StudentExcersise;

  ngOnInit(): void {
    
    // this.checkTask()
    // this._exService.GetExcesisesById(this.taskId).subscribe(res=> 
    //   {this.ex = res,
    //   this.loaded = true},
    //   err=> console.log(err)
    //   )
    }

  getVal(val){
    this.answer=val;
    console.info(this.answer)
  }

  confirmAnswer(){
    console.log("test")
    let ex = new ExcersiseAnswerRequest(
      localStorage.getItem('id'),
      this.taskId,
      this.answer
    )
    this._exService.SaveAnswer(ex).subscribe(res=> 
      console.log(res),
      err => console.log(err))
  }

  // checkTask(){
  //   this.checkEx = new CheckExRequest(this.taskId, localStorage.getItem('id'))
  //   this._exService.CheckExercise(this.checkEx).subscribe(
  //     res => {
  //       this.complete = res
  //       this.flag = true
  //     },
  //     err => console.log(err)
  //   )
  // }
}
