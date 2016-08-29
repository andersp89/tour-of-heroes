import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.service';

/*We create metadata with the @Component decorator where we specify the selector name that identifies this component's element. Then we export the class to make it available to other components.*/
@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
// declare that hero is an input. We'll do it the way we prefer, by annotating the hero property with the @Input decorator  
//    @Input()
//  hero: Hero;
// NOT TO BE USED ANYMORE.


/*Let's have the ActivatedRoute service and the HeroService injected into the constructor, 
saving their values in private fields*/
  constructor(
  private heroService: HeroService,
  private route: ActivatedRoute) {
}

/*
Inside the ngOnInit lifecycle hook, we use the params observable to extract the id parameter value from 
the ActivateRoute service and use the HeroService to fetch the hero with that id. Notice how we extract 
the id by calling the forEach method which will deliver our array of route parameters.
*/
ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  });
}

// To handle back button in browser
goBack(): void {
  window.history.back();
}

}


/*The new HeroDetailComponent should take the id parameter from the params
 observable in the ActivatedRoute service and use the HeroService to fetch the hero with that id.*/
  
