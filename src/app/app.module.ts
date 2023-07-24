import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadComponent } from './header/head/head.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { ImagePresentationComponent } from './image-presentation/image-presentation.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { FooterComponent } from './footer/footer.component';
import { MessageComponent } from './footer/message/message.component';
import { ContactComponent } from './footer/contact/contact.component';
import { FootComponent } from './footer/foot/foot.component';

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
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
