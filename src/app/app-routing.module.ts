import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  // {path: '**', redirectTo: '404', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
