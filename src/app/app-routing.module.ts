import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { restrictDashboardGuard } from './shared/guards/restrict-dashboard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-not-logged/login',
    pathMatch: 'full',
  },
  {
    path: 'user-not-logged',
    loadChildren: () =>
      import('./register-login/register-login.module').then(
        (m) => m.RegisterLoginModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [restrictDashboardGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
