import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [SecondComponent],
  imports: [
    CommonModule,
    BRoutingModule
  ]
})
export class BModule { }
