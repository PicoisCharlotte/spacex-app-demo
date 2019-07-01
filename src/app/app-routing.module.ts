import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu/home', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'core', loadChildren: './core/core.module#CorePageModule' },
  { path: 'all-cores', loadChildren: './core/all-cores/all-cores.module#AllCoresPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'ships', loadChildren: './ships/ships.module#ShipsPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
