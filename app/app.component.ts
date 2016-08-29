import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
       <h1>{{title}}</h1>

<!-- We have to tell it where by adding a <router-outlet> element to the bottom of the template. 
We add an anchor tag to the template which, when clicked, triggers navigation to the HeroesComponent-->

<!-- The Angular Router provides a routerLinkActive directive we can use to add a class to the HTML navigation -->
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
     `,
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';

}