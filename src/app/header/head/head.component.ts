import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  clicked: boolean = false;

  toggle(){
    this.clicked = !this.clicked;
  }
}
