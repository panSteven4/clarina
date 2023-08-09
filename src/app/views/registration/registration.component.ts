import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  isDroppedFirm = false;
  isDroppedAddress = false;
  toggleFirm(){
    this.isDroppedFirm = !this.isDroppedFirm;
  }

  toggleAddress() {
    this.isDroppedAddress = !this.isDroppedAddress;
  }

}
