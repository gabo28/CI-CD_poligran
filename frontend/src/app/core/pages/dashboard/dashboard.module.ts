import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../../../shared/modules/MaterialModule';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UrbanizationsComponent } from './urbanizations/urbanizations.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent, UsersComponent, UrbanizationsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
