import { Component } from '@angular/core';

@Component({
  selector: 'app-katalog-breadcrumbs',
  templateUrl: './katalog-breadcrumbs.component.html',
  styleUrls: ['./katalog-breadcrumbs.component.css'],
})
export class KatalogBreadcrumbsComponent {
  categories: string[] = ['uwu', 'pes', 'kočka', 'meow'];
}
