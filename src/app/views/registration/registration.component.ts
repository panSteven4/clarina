import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  isDroppedFirm = false;
  isDroppedAddress = false;
  profileForm = this.fb.group({
    nickname: ["", Validators.required],
    password: ["", Validators.required],
    password_again: ["", Validators.required],
    firm_name: [""],
    ic: [""],
    dic: [""],
    title: [""],
    firstname: ["", Validators.required],
    surname: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    phone_number: [""],
    street: ["", Validators.required],
    city: ["", Validators.required],
    psc: ["", Validators.required],
    state: [""],
    name_or_firm_name: [""],
    delivery_street: [""],
    delivery_city: [""],
    delivery_psc: [""],
    delivery_state: [""]
  })

  constructor(private readonly fb: FormBuilder) { }
  toggleFirm(){
    this.isDroppedFirm = !this.isDroppedFirm;
  }

  toggleAddress() {
    this.isDroppedAddress = !this.isDroppedAddress;
  }

  onSubmit() {
  //   TODO - where should I send new profile?
    console.log(this.profileForm);

    this.profileForm.reset() // deletes every filled cell in form - resets everything
  }

  showError(name: string):boolean {
    if(!this.profileForm){
      return false
    }
    const formsControl = this.profileForm.get(name)
    if(!formsControl){
      return false
    }
    formsControl.hasValidator(Validators.required)
    return formsControl.touched && formsControl.invalid;
  }

}
