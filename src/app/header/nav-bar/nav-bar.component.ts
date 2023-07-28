import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  clicked: boolean = false;

  dropItDown() {
    this.clicked = !this.clicked;
  }
}
