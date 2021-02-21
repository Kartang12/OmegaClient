import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_Services/api.service';
import { Api } from 'src/app/_Models/Api';
import { ApiTask } from 'src/app/_Models/ApiTask';
import { TaskParameter } from 'src/app/_Models/TaskParameter';
import { DatePipe } from '@angular/common';
import {formatDate } from '@angular/common';
import { SaveTaskRequest } from 'src/app/_Models/Requests/SaveTaskRequest';
import { Parameter } from 'src/app/_Models/Parameter';
import { TaskService } from 'src/app/_Services/task.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css']
})
export class ApisComponent implements OnInit {

  constructor(
    private _apiService:ApiService,
    private _taskService:TaskService
    ) { }

  saveRequest:SaveTaskRequest 

  parametersLoaded:boolean = false;
  apis:Api[]
  apiTasks:ApiTask[]
  parameters:TaskParameter[]

  ngOnInit(): void {
    this.saveRequest = new SaveTaskRequest()
    this._apiService.GetApis().subscribe(
      res => this.apis = res,
      err => alert(err)
    );
  }

  loadTasks(id:number){
    this.parametersLoaded = false;
    this._apiService.GetApiTasks(id).subscribe(
      res=>{
        console.log(res)
        this.apiTasks = res
      },
      err=>console.log(err)
    );
  }

  loadTaskParameters(id:number){
    this._apiService.GetTaskParameters(id).subscribe(
      res => {
        // console.log(res)
        this.parameters = res
        this.saveRequest.taskId = res[0].taskId
        this.saveRequest.parameters = new Array(res.length)
        for(let i = 0; i < res.length; i++)
        {
          // console.log(res[i])
          this.saveRequest.parameters[i] = new Parameter()
          this.saveRequest.parameters[i].parameterId = res[i].id
          this.saveRequest.parameters[i].value = res[i].defaultValue
          // console.log(this.saveRequest.parameters[i])
        };

        this.parametersLoaded = true
      },
      err => alert(err)
    );
    }

    ApplyTask(){
      console.log(this.saveRequest)
      this._taskService.SaveTask(this.saveRequest).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    }
}
