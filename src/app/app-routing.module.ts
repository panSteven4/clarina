import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./views/homepage/homepage.component";
import {KatalogComponent} from "./views/katalog/katalog.component";
import {BiciComponent} from "./views/katalog/bici/bici.component";
import {DarkyComponent} from "./views/katalog/darky/darky.component";
import {KlavesoveComponent} from "./views/katalog/klavesove/klavesove.component";
import {NotyComponent} from "./views/katalog/noty/noty.component";
import {PrislusenstviComponent} from "./views/katalog/prislusenstvi/prislusenstvi.component";
import {SmycceComponent} from "./views/katalog/smycce/smycce.component";
import {StrunneComponent} from "./views/katalog/strunne/strunne.component";
import {NotFoundComponent} from "./views/not-found/not-found.component";

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {
    path: "katalog",
    component: KatalogComponent,
    children: [
      {path: "bici", component: BiciComponent},
      {path: "darky", component: DarkyComponent},
      {path: "dechy", component: KlavesoveComponent},
      {path: "klavesove", component: NotyComponent},
      {path: "noty", component: PrislusenstviComponent},
      {path: "prislusenstvi", component: PrislusenstviComponent},
      {path: "smycce", component: SmycceComponent},
      {path: "strunne", component: StrunneComponent},
    ]
  },

  {path: "**", component: NotFoundComponent} // has to be last in Routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
