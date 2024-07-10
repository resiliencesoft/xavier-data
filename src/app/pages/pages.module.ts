import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DescriptionComponent } from './description/description.component';
import { Screen1Component } from './screen1/screen1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DescriptionComponent,
    Screen1Component
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule
  ]
})
export class PagesModule { }
