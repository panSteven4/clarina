import { Component } from '@angular/core';
import {ShowGalleryService} from "../../services/show-gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  constructor(readonly ShowGalleryService: ShowGalleryService) {
  }
}
