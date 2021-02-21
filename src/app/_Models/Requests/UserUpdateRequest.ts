import { Subject } from '../Subject'

export class UserUpdateRequest{
    Name: string
    Role: string
    subjects: Subject[]
}