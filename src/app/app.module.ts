import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadComponent } from './header/head/head.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { ImagePresentationComponent } from './content/image-presentation/image-presentation.component';
import { ProductListComponent } from './content/product-list/product-list.component';
import { ProductComponent } from './content/product-list/product/product.component';
import { FooterComponent } from './footer/footer.component';
import { MessageComponent } from './content/message/message.component';
import { ContactComponent } from './footer/contact/contact.component';
import { FootComponent } from './footer/foot/foot.component';
import {ProductGeneratorService} from "./services/product-generator.service";
import { HomepageComponent } from './views/homepage/homepage.component';
import { KatalogComponent } from './views/katalog-dummy/katalog/katalog.component';
import { DechyComponent } from './views/katalog-dummy/katalog/dechy/dechy.component';
import { SmycceComponent } from './views/katalog-dummy/katalog/smycce/smycce.component';
import { StrunneComponent } from './views/katalog-dummy/katalog/strunne/strunne.component';
import { KlavesoveComponent } from './views/katalog-dummy/katalog/klavesove/klavesove.component';
import { BiciComponent } from './views/katalog-dummy/katalog/bici/bici.component';
import { NotyComponent } from './views/katalog-dummy/katalog/noty/noty.component';
import { DarkyComponent } from './views/katalog-dummy/katalog/darky/darky.component';
import { PrislusenstviComponent } from './views/katalog-dummy/katalog/prislusenstvi/prislusenstvi.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { FiltersComponent } from './content/filters/filters.component';
import { KatalogDummyComponent } from './views/katalog-dummy/katalog-dummy.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './views/registration/registration.component';
import { ProductDetailComponent } from './content/product-list/product-detail/product-detail.component';
import { KatalogBreadcrumbsComponent } from './content/katalog-breadcrumbs/katalog-breadcrumbs.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadComponent,
    NavBarComponent,
    ImagePresentationComponent,
    ProductListComponent,
    ProductComponent,
    FooterComponent,
    MessageComponent,
    ContactComponent,
    FootComponent,
    HomepageComponent,
    KatalogComponent,
    DechyComponent,
    SmycceComponent,
    StrunneComponent,
    KlavesoveComponent,
    BiciComponent,
    NotyComponent,
    DarkyComponent,
    PrislusenstviComponent,
    NotFoundComponent,
    FiltersComponent,
    KatalogDummyComponent,
    RegistrationComponent,
    ProductDetailComponent,
    KatalogBreadcrumbsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [ProductGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
