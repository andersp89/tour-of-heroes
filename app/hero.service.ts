
/*Notice that we imported the Angular Injectable function and applied that 
function as an @Injectable() decorator.

TypeScript sees the @Injectable() decorator and emits metadata about our service, 
metadata that Angular may need to inject other dependencies into this service.

The consumer of our service doesn't know how the service gets the data. 
Our HeroService could get Hero data from anywhere. It could get the data from a 
web service or local storage or from a mock data source.

*/

import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {

/* promise returning getheroes method*/
getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES);
}

getHeroesSlowly(): Promise<Hero[]> {
  return new Promise<Hero[]>(resolve =>
    setTimeout(resolve, 10000)) // delay 2 seconds
    .then(() => this.getHeroes());
}

/* (5) Someday we're going to get heroes from a remote server. We don’t call http 
yet, but we aspire to in later chapters. When we do, we'll have to wait for 
the server to respond and we won't be able to block the UI while 
we wait. We'll use Promises.*/
/* old instant return  getHeroes(): Hero[] {
    return HEROES;
  }
*/

/* Open HeroService and add a getHero method that filters the heroes list from getHeroes by id:*/

getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}

}
