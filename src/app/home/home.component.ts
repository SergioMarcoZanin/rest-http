import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GorestService } from '../gorest.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  homeform!: FormGroup;

  constructor(private gorest: GorestService){}

  ngOnInit(): void {
    this.homeform = new FormGroup ({
      name: new FormControl('', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender:new FormControl('', Validators.required),
      status:new FormControl('', Validators.required)
    })

    // this.gorest.insertUsers(
    //   'https://gorest.co.in/public/v2/users',
    //    {name: 'Luca', email:'lucarossi@gmail.com'}
    // ).subscribe(data => {
    //   console.log(data)
    // })


    // this.gorest.post(
    //   {name: 'Luca', email:'lucarossi@gmail.com', gender:'male', status: 'active'}
    //  ).subscribe(data => {
    //       console.log(data)
    //     })
  }

  onSubmit(){
    console.log(this.homeform)

    this.gorest.post(
      {name: this.homeform.value.name, email:this.homeform.value.email, gender:this.homeform.value.gender, status: this.homeform.value.status}
     ).subscribe(data => {
          console.log(data)
        })
  }

}
