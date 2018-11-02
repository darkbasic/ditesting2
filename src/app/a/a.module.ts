import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { FirstComponent } from './first/first.component';
import { AValueService } from './a-value.service';

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    ARoutingModule
  ],
  /*providers: [
    AValueService,
  ]*/
})
export class AModule { }
