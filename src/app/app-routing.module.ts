
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BezkostilyanikakComponent } from './bezkostilyanikak/bezkostilyanikak.component';
import { VtoroiComponent } from './vtoroi/vtoroi.component';


const routes: Routes = [
  {path: '', component: VtoroiComponent},
  {path: 'second', component: BezkostilyanikakComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }