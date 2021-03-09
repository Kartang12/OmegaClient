import { Parameter } from '../Parameter'

export class UserTaskUpdateRequest{
    id:number
    name:string
    nextInvoke:string
    daysInterval:number
    timeInterval:string
    parameters:Parameter[] = []
}