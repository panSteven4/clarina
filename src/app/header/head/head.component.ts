import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  isDropped: boolean = false;
  isVisibleLogin: boolean = false;

  toggle(){
    this.isDropped = !this.isDropped;
  }

  toggleLoginModal() {
    this.isVisibleLogin = true;
  }
}
