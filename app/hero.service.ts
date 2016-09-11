
/*Notice that we imported the Angular Injectable function and applied that 
function as an @Injectable() decorator.

TypeScript sees the @Injectable() decorator and emits metadata about our service, 
metadata that Angular may need to inject other dependencies into this service.

The consumer of our service doesn't know how the service gets the data. 
Our HeroService could get Hero data from anywhere. It could get the data from a 
web service or local storage or from a mock data source.

*/
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

/* now using http server: */

private heroesUrl = 'app/heroes';  // URL to web api

constructor(private http: Http) { }

getHeroes(): Promise<Hero[]> {
  return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().data as Hero[])
             .catch(this.handleError);
}



/* promise returning getheroes method
getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES);
}*/


// not used, just to show how a delay feels:
getHeroesSlowly(): Promise<Hero[]> {
  return new Promise<Hero[]>(resolve =>
    setTimeout(resolve, 10000)) // delay 2 seconds
    .then(() => this.getHeroes());
}

/* (5) Someday we're going to get heroes from a remote server. We don’t call http 
yet, but we aspire to in later chapters. When we do, we'll have to wait for 
the server to respond and we won't be able to block the UI while 
we wait. We'll use Promises.*/
/* old instant return  
getHeroes(): Hero[] {
    return HEROES;
  }
*/

/* Open HeroService and add a getHero method that filters the heroes list from getHeroes by id:*/

getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}

}
