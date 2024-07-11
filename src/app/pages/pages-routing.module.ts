import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { Screen1Component } from './screen1/screen1.component';

const routes: Routes = [
  {
    path:'description',
    component: DescriptionComponent
  },
  {
    path:'screen1',
    component: Screen1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
