import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    return {heroes};
  }
}


/* Our application is in the early stages of development and far from ready for production. 
We don't even have a web server that can handle requests for heroes. Until we do, we'll have to fake it. */

/* Remember, the in-memory web API is only useful in the early stages of development and for demonstrations 
such as this Tour of Heroes. Skip it when you have a real web API server.*/