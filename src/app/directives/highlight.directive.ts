import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding("style.backgroundColor") backgroundColor: string|undefined;
  constructor() { }

   @HostListener("mouseenter") onMouseEnter() {
    this.backgroundColor = "yellow";
   }

   @HostListener("mouseleave") onMouseLeave() {
    this.backgroundColor = "inherit";
   }
}
