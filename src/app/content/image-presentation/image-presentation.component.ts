import { Component } from '@angular/core';
import { Slide } from '../../models/cart.model';

@Component({
  selector: 'app-image-presentation',
  templateUrl: './image-presentation.component.html',
  styleUrls: ['./image-presentation.component.css'],
})
export class ImagePresentationComponent {
  slideTime: number = 3000;
  timer: ReturnType<typeof setInterval> | undefined;
  slides: Slide[] = [
    {
      name: 'CLARINA MUSIC',
      title: 'CLARINA MUSIC',
      description: 'Vítejte na stránkách CLARINA MUSIC',
      moreButtonLink: '',
      imagePath: '',
    },
    {
      name: 'Koncertní nástroje',
      title: 'Specialista na koncertní nástroje',
      description: 'Buffet Crampon, Yamaha, Amati, Leblanc, Bach, Adams ...',
      moreButtonLink: '',
      imagePath: 'assets/slide_preview_bg.jpg',
    },
    {
      name: 'příslušenství a noty',
      title: 'příslušenství a noty',
      description: '',
      moreButtonLink: '',
      imagePath: 'assets/slide_preview_bg.jpg',
    },
    {
      name: 'Nová prodejna v Bratislavě',
      title: 'Pozor, pozor, nová prodejna v Bratislavě !!! ',
      description:
        'Tímto bychom Vás rádi upozornili na to, že jsme od 1.6.2022 otevřeli novou prodejnu v Bratislavě na adrese Sládkovičova 1\n' +
        '\n' +
        '(vchod z ulice Palisády) ',
      moreButtonLink: '',
      imagePath: '',
    },
    {
      name: 'Změna otevírací doby',
      title:
        'Změna otevírací doby v období letních prázdnin\n' +
        'od 1.7.2023 do 31.8.2023',
      description: '',
      moreButtonLink: '',
      imagePath: '',
    },
  ];
  currentSlide: number = 0;

  constructor() {
    this.slideShow();
  }

  setSlide(index: number) {
    this.currentSlide = index; // setting index

    clearInterval(this.timer); // removing current interval (new one will be set in slideShow() function)
    this.slideShow();
  }
  slideShow() {
    this.timer = setInterval(() => {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    }, this.slideTime);
  }
}
