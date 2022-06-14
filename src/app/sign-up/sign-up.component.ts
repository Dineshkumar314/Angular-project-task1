import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  value = '';
  formGroup: any;
  constructor() { 
    this.formGroup = new FormGroup({
      e_mail: new FormControl('',[Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
      password : new FormControl('',[Validators.required]),
      confirmpassword : new FormControl('',[Validators.required]),
      number : new FormControl('',[Validators.maxLength(5)]),
    });
  }
  submitForm(){
    console.log(this.formGroup);
  }
  ngOnInit(): void {
  }
}
