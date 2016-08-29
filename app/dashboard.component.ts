import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

/* Define a heroes array property. */
  heroes: Hero[] = [];

/*The DashboardComponent doesn't have the router yet. We obtain it in the usual way: 
import the router reference and inject it in the constructor (along with the HeroService)*/
/* Inject the HeroService in the constructor and hold it in a private heroService field.*/
constructor(
  private router: Router,
  private heroService: HeroService) {
}
/* Call the service to get heroes inside the Angular ngOnInit lifecycle hook. */
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
  let link = ['/detail', hero.id];
  this.router.navigate(link);
}
}

