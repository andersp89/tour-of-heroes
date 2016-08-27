import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';


/*The AppComponent knows which hero to show: the hero that the user selected 
from the list. The user's selection is in its selectedHero property.*/

 /* add a property binding on class for the selected class to the template. We'll set this
 to an expression that compares the current selectedHero to the hero. */

 /*Notice that the hero property is the target of a property binding —
 it's in square brackets to the left of the (=).*/

 /* binds its selectedHero property to the hero property of our HeroDetailComponent. The binding might look like this:*/
 
@Component({
    selector: 'my-app',
    template:`
  <h1>{{title}}</h1>

<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes"  [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
  
<my-hero-detail [hero]="selectedHero"></my-hero-detail>

  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
/* (2) We have to teach the injector how to make a HeroService by registering 
a HeroService provider. */
/*The providers array tells Angular to create a fresh instance of the HeroService 
when it creates a new AppComponent. The AppComponent can use that service to get 
heroes and so can every child component of its component tree.*/
 providers: [HeroService]
})

export class AppComponent {
  heroes: Hero[]; //expose HEROES array below for binding. We did not have to define the heroes type. TypeScript can infer it from the HEROES array.
  title = 'Tour of Heroes';
  selectedHero: Hero;

/* (1) The constructor itself does nothing. The parameter simultaneously defines a 
private heroService property and identifies it as a HeroService injection site.
Now Angular will know to supply an instance of the HeroService*/
  constructor(private heroService: HeroService) { }

/* (3) We've got the service in a heroService private variable. Let's use it.
We pause to think. We can call the service and get the data in one line.*/

/* (6) As a result of our change to HeroService, we're now setting this.heroes 
to a Promise rather than an array of heroes.
pass our callback function as an argument to the Promise's then method*/
/* Our callback sets the component's heroes property to the array of heroes returned 
by the service.*/
  getHeroes(): void {
   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  };

/* (4) AppComponent should fetch and display heroes without a fuss. 
Where do we call the getHeroes method?  */
/*We write an ngOnInit method with our initialization logic inside and 
leave it to Angular to call it at the right time. In our case, we initialize by 
calling getHeroes.*/
  ngOnInit(): void {
    this.getHeroes();
  };

  // Add an onSelect method that sets the selectedHero property to the hero class.
  onSelect(hero: Hero): void { 
  this.selectedHero = hero;
  }

}


