
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
  getHeroes(): Hero[] {
    return HEROES;
  }
}
