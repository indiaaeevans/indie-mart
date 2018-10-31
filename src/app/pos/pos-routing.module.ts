import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosComponent } from './pos/pos.component';

const routes: Routes = [
  {
    path: '',
    component: PosComponent,
    children: [
      { path: '', redirectTo: '/pos/home', pathMatch: 'full' },
      { path: 'home', component: PosComponent },
      // { path: 'users', component: UserManagerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
