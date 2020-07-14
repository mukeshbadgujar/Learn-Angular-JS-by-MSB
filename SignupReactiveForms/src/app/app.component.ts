import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import { passwordChecker } from './custome-validators/password-checker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SignupReactiveForms';
  registerForm: FormGroup;
  submitted= false;

  constructor(private formBuilder:FormBuilder){}
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      pass: ["",[Validators.required, Validators.minLength(6)]],
      confPass: ["",Validators.required],
      acceptTC: [false, Validators.requiredTrue],
    },{
      validators:passwordChecker("pass","confPass"),
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    console.table(this.registerForm.value);
    console.table(this.registerForm);
    alert("Success Submitted \n"+JSON.stringify(this.registerForm.value))
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }
}
