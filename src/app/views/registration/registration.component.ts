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
    console.log("works!")
  //   TODO - where should I send new profile?
    let new_profile = {
        nickname: this.profileForm.value.nickname,
        password: this.profileForm.value.password,
        password_again: this.profileForm.value.password_again,
        firm_name: this.profileForm.value.firm_name,
        ic: this.profileForm.value.ic,
        dic: this.profileForm.value.dic,
        title: this.profileForm.value.title,
        firstname: this.profileForm.value.firstname,
        surname: this.profileForm.value.surname,
        email: this.profileForm.value.email,
        phone_number: this.profileForm.value.phone_number,
        street: this.profileForm.value.street,
        city: this.profileForm.value.city,
        psc: this.profileForm.value.psc,
        state: this.profileForm.value.state,
        name_or_firm_name: this.profileForm.value.name_or_firm_name,
        delivery_street: this.profileForm.value.delivery_street,
        delivery_city: this.profileForm.value.delivery_city,
        delivery_psc: this.profileForm.value.delivery_psc,
        delivery_state: this.profileForm.value.delivery_state
    }
    console.log(new_profile);

    this.profileForm.reset() // deletes every filled cell in form - resets everything
  }

}
