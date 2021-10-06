import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { Pagina1Component } from "./pages/pagina1/pagina1.component";
import { Pagina2Component } from "./pages/pagina2/pagina2.component";

export const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'pagina1', component: Pagina1Component },
  {path: 'pagina2', component: Pagina2Component},
  // {path: '**', redirectTo: '404', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
