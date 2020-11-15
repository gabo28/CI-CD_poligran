import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UrbanizationsComponent } from './urbanizations/urbanizations.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo:'urbanizations' },
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'urbanizations', component: UrbanizationsComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
