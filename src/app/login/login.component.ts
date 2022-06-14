import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   value = '';
   formGroup: any;
   
  constructor() { 
    this.formGroup = new FormGroup({
      e_mail: new FormControl('',[Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
      password  : new FormControl('',[Validators.required]),
    });
    
  }
   submitForm(){
     console.log(this.formGroup);
   }
  ngOnInit(): void {
  }
}