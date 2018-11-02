import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path: '', redirectTo: 'second', pathMatch: 'full'},
  {path: 'second', component: SecondComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRoutingModule { }
