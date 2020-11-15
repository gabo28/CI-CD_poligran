import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/pages/';
  //{ path: 'home', component: HomeComponent },

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./core/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'not-found', loadChildren: () => import('./core/pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
