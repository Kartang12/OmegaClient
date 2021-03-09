import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/_Services/task.service';
import { UserTask } from 'src/app/_Models/Responses/UserTask';
import { TaskParameter } from 'src/app/_Models/TaskParameter';
import { UserTaskParmeter } from 'src/app/_Models/Responses/UserTaskParameter';
import { UserTaskUpdateRequest } from 'src/app/_Models/Requests/UserTaskUpdateRequest';
import { Parameter } from 'src/app/_Models/Parameter';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  constructor(private _taskService:TaskService) { }

  selectedTaskId:number
  parametersLoaded:boolean = false
  tasks:UserTask[]
  parameters:UserTaskParmeter[] = []
  updateRequest:UserTaskUpdateRequest = new UserTaskUpdateRequest()

  ngOnInit(): void {
    this._taskService.GetMyTasks().subscribe(
      res => {
        this.tasks = res
      },
      err=> console.log(err)
    )
  }

  getTaskParameters(taskId:number){
    this.selectedTaskId = taskId
    this._taskService.GetUserTaskParameters(taskId).subscribe(
      res=> {
        console.log(res)
        this.updateRequest.id = taskId
        this.parameters = res
        this.parametersLoaded = true
        console.log(this.parameters)
      },
      err=> console.log(err)
    )
  }

  updateTask(){
    this.parameters.forEach(x => {
      this.updateRequest.parameters.push(new Parameter(x.value, x.parameterId))
    }); 
    this._taskService.UpdateTask(this.updateRequest).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

  dismissTask(){
    this._taskService.DismissTask(this.selectedTaskId).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }


}
