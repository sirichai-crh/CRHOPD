import { MainpagesComponent } from './pages/mainpages/mainpages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "mainpag",
    pathMatch: "full"
  },
  {
    path: 'mainpag',
    component: MainpagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
