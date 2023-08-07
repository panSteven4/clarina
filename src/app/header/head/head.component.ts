import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  isDropped: boolean = false;

  toggle(){
    this.isDropped = !this.isDropped;
  }
}
