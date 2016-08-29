import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


/*The AppComponent knows which hero to show: the hero that the user selected 
from the list. The user's selection is in its selectedHero property.*/

 /* add a property binding on class for the selected class to the template. We'll set this
 to an expression that compares the current selectedHero to the hero. */

 /*Notice that the hero property is the target of a property binding —
 it's in square brackets to the left of the (=).*/

 /* binds its selectedHero property to the hero property of our HeroDetailComponent. The binding might look like this:*/
 
@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']

/* (2) We have to teach the injector how to make a HeroService by registering 
a HeroService provider. */
/*The providers array tells Angular to create a fresh instance of the HeroService 
when it creates a new AppComponent. The AppComponent can use that service to get 
heroes and so can every child component of its component tree.*/

})

export class HeroesComponent implements OnInit {
  heroes: Hero[]; //expose HEROES array below for binding. We did not have to define the heroes type. TypeScript can infer it from the HEROES array.
  selectedHero: Hero;

/* (1) The constructor itself does nothing. The parameter simultaneously defines a 
private heroService property and identifies it as a HeroService injection site.
Now Angular will know to supply an instance of the HeroService*/
  constructor(
    private router: Router,
    private heroService: HeroService) { }

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

  // Call the router method: navigate. 
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}


