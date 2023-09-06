import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./views/homepage/homepage.component";
import {KatalogComponent} from "./views/katalog-dummy/katalog/katalog.component";
import {BiciComponent} from "./views/katalog-dummy/katalog/bici/bici.component";
import {DarkyComponent} from "./views/katalog-dummy/katalog/darky/darky.component";
import {KlavesoveComponent} from "./views/katalog-dummy/katalog/klavesove/klavesove.component";
import {NotyComponent} from "./views/katalog-dummy/katalog/noty/noty.component";
import {PrislusenstviComponent} from "./views/katalog-dummy/katalog/prislusenstvi/prislusenstvi.component";
import {SmycceComponent} from "./views/katalog-dummy/katalog/smycce/smycce.component";
import {StrunneComponent} from "./views/katalog-dummy/katalog/strunne/strunne.component";
import {NotFoundComponent} from "./views/not-found/not-found.component";
import {KatalogDummyComponent} from "./views/katalog-dummy/katalog-dummy.component";
import {DechyComponent} from "./views/katalog-dummy/katalog/dechy/dechy.component";
import {RegistrationComponent} from "./views/registration/registration.component";
import {ProductDetailComponent} from "./content/product-list/product-detail/product-detail.component";

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "registrace", component: RegistrationComponent},
  {
    path: "katalog",
    component: KatalogDummyComponent,
    children: [
      {path: "", component: KatalogComponent},

      // ↓TODO↓ - this will be later deleted - not possible to manually write everything
      {path: "bici", component: BiciComponent},
      {path: "darky", component: DarkyComponent},
      {path: "dechy", component: DechyComponent},
      {path: "klavesove", component: KlavesoveComponent},
      {path: "noty", component: NotyComponent},
      {path: "prislusenstvi", component: PrislusenstviComponent},
      {path: "smycce", component: SmycceComponent},
      {path: "strunne", component: StrunneComponent},
      // ↑TODO↑ - this will be later deleted - not possible to manually write everything

      {path: ":id", component: ProductDetailComponent}
    ]
  },

  {path: "**", component: NotFoundComponent} // has to be last in Routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
