import { Component, OnInit} from '@angular/core';
import { GorestService } from '../gorest.service';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit{
  users: User []= [{
    "id": 0,
    "name": "",
    "email": "",
    "gender": "",
    "status": ""
}]
user: User = {
  "id": 0,
  "name": "",
  "email": "",
  "gender": "",
  "status": ""
}
homeform!: FormGroup;

showdialog: boolean = false

constructor(private gorest: GorestService, public dialog: MatDialog ){}

ngOnInit(): void {
  this.homeform = new FormGroup ({
    name: new FormControl('', Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gender:new FormControl('', Validators.required),
    status:new FormControl('', Validators.required)
  })
  this.getUsers()
}
getUsers(){
  this.gorest.get().subscribe(data => {
    this.users = data
    console.log(data)

      })
}

getbyid(id:number){
  this.gorest.getbyid (id).subscribe(data => {
    this.user = data
    console.log(data)
    this.homeform.patchValue({name: data.name, email: data.email, status: data.status, gender: data.gender})
      })
}


deleteUser(id:number){
  this.gorest.delete(id).subscribe((data: any) => {
  this.users = data
  console.log(data)
  this.getUsers()
    })
}
//  updateUser (id:number){
//         this.gorest.put(id , data:any).subscribe(data => {
//         this.users = data
//         console.log(data)
//           })
// }
onSubmit(id:number){
  console.log(this.homeform)

  this.gorest.put(
    id,{name: this.homeform.value.name, email:this.homeform.value.email, gender:this.homeform.value.gender, status: this.homeform.value.status}
   ).subscribe(data => {
        console.log(data)
      })
}
openpopup(id:number){
  this.getbyid(id)
}
}


interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}


