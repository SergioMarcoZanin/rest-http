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
      nome: new FormControl('', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email])
    })

    this.gorest.insertUsers(
      'https://gorest.co.in/public/v2/users.json',
       {name: 'Luca', email:'lucarossi@gmail.com'}
    ).subscribe(data => {
      console.log(data)
    })

  }

}
