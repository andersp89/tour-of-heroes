import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
     <h1>{{title}}</h1>

<!-- We have to tell it where by adding a <router-outlet> element to the bottom of the template. 
We add an anchor tag to the template which, when clicked, triggers navigation to the HeroesComponent-->
     
    <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   	</nav>
     <router-outlet></router-outlet>
     `
})

export class AppComponent {
  title = 'Tour of Heroes';

}