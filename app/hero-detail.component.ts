import { Component, Input } from '@angular/core';
import { Hero } from './hero';

/*We create metadata with the @Component decorator where we specify the selector name that identifies this component's element. Then we export the class to make it available to other components.*/
@Component({
  selector: 'my-hero-detail',
  template: `
  <!-- When there is no selectedHero, the ngIf directive removes the hero detail HTML from the DOM. There will be no hero detail elements and no bindings to worry about. -->
<div *ngIf="hero">
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name"> 
  </div>
</div>
  
  
  
  `
})

export class HeroDetailComponent {
// declare that hero is an input. We'll do it the way we prefer, by annotating the hero property with the @Input decorator  
    @Input()
  hero: Hero;
}

  
