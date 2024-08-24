import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
   
    constructor(private heroService: HeroService) { }
   
    ngOnInit() {
      this.getHeroes();
    }
   //getHeroes() returns the sliced list of heroes at positions 1 and 5
    getHeroes(): void {
      this.heroService.getServiceHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }
  
}
