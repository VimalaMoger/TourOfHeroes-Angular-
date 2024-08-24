import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { CommonModule } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { RouterModule } from '@angular/router';

//Component is decorator function that specifies the Angular metadata for the component
//added FormsModule for adding ngModel in the template
@Component({
  selector: 'app-heroes',  //app-heroes is the element selector for the HeroesComponent
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent, RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent implements OnInit{ 
   
 
 //defines hero array
  heroes: Hero[] = [];   //HEROES;
  
  //expects angular to inject the HeroService into heroService variable
  constructor(private heroService: HeroService){}
  
  ngOnInit():void {
    this.getHeroes();    
  } 
   
  //subscribe passes the emitted array to the callback, which sets the component's heroes property
  getHeroes(): void{
    this.heroService.getServiceHeroes().subscribe(heroes => this.heroes =heroes);
  }
   
 //initial steps-getting started
  /*
  selectedHero : Hero  = {
    id: 1,
    name: 'Windstorm'
  };
  
  //adding event binding
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
  
  getHeroes(): void{
      this.heroes = this.heroService.getServiceHeroes();
  } */
}

