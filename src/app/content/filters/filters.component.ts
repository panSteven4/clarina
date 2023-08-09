import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  isDropped = false;
  max= 300000 // this will be later the most expensive item in current view;
  priceGap = 3000;
  minValue = 0;
  maxValue = this.max;
  sliderClass = {};

  toggle() {
    this.isDropped = !this.isDropped;
  }

  prettifySliderLeft() {
    if(this.maxValue - this.minValue < this.priceGap){
      this.minValue = this.maxValue - this.priceGap;
    }else{
      this.sliderClass = {
        "left": +(this.minValue/this.max*100)+"%",
        "right": +(100-(this.maxValue/this.max*100))+"%"
      }
    }
  }

  prettifySliderRight() {
    if(this.maxValue - this.minValue < this.priceGap){
      this.maxValue = this.minValue + this.priceGap;
    }else{
      this.sliderClass = {
        "left": +(this.minValue/this.max*100)+"%",
        "right": +(100-(this.maxValue/this.max*100))+"%"
      }
    }
  }
}
