import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},

/* The colon (:) in the path indicates that :id is a placeholder to be filled with 
a specific hero id when navigating to the HeroDetailComponent*/
{
  path: 'detail/:id',
  component: HeroDetailComponent
},

];
 /*This route definition has the following parts:
path: the router matches this route's path to the URL in the browser address bar (heroes).
component: the component that the router should create when navigating to this route (HeroesComponent).
*/

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

/* This method returns a configured router module that we'll add to our root NgModule, AppModule.
The forRoot method gives us the Router service providers and directives needed for routing.*/
