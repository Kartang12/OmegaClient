import { Parameter } from '../Parameter'
import { TimeInterval } from '../TimeInterval'

export class SaveTaskRequest{
    taskId:number
    name:string
    nextInvoke:string
    daysInterval:string
    timeInterval:string
    parameters:Parameter[]
}