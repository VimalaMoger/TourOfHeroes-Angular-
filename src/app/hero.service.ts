
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';


@Injectable({providedIn: 'root'})
export class HeroService {

constructor() { }
  
//Observable used to wait for service to return data   
getServiceHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    return of(hero);
}

//data fetched from HEROES synchronously
 getServiceHeroes():Observable<Hero[]>{
    return of(HEROES);
  } 
   
}
 