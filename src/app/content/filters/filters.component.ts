import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  isDropped = false;
  minValue = 0;
  maxValue = 1300000;

  toggle() {
    this.isDropped = !this.isDropped;
  }

}
