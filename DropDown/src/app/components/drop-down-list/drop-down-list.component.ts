import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css']
})
export class DropDownListComponent implements OnInit {

  isSubmitted = false;
  // Country Names
  Country: any = ['England', 'Australia', 'France', 'India']
  constructor(public fb: FormBuilder) { }

  registrationForm = this.fb.group({
    countryName: ['', [Validators.required]]
  })

  // Country selection
  changeCountry(e) {
    this.countryName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method for accessing form controls
  get countryName() {
    return this.registrationForm.get('countryName');
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value))
    }

  }


  ngOnInit(): void {
  }

}
