import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu/home', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'core', loadChildren: './core/core.module#CorePageModule' },
  { path: 'all-cores', loadChildren: './core/all-cores/all-cores.module#AllCoresPageModule' },
  { path: 'details', loadChildren: './core/details/details.module#DetailsPageModule' },
  { path: 'landing-pad', loadChildren: './landing-pad/landing-pad.module#LandingPadPageModule' },
  { path: 'details', loadChildren: './landing-pad/details/details.module#DetailsPageModule' },
  { path: 'roadster', loadChildren: './roadster/roadster.module#RoadsterPageModule' },
  { path: 'upcoming-cores', loadChildren: './core/upcoming-cores/upcoming-cores.module#UpcomingCoresPageModule' },  { path: 'past-cores', loadChildren: './core/past-cores/past-cores.module#PastCoresPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
