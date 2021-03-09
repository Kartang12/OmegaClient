import { Parameter } from '../Parameter'

export class SaveTaskRequest{
    taskId:number
    name:string
    nextInvoke:string
    daysInterval:string
    timeInterval:string
    parameters:Parameter[]
}