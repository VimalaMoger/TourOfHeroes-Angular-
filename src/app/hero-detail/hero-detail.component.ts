import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})

export class HeroDetailComponent {
/* 
  @Input()
  hero! : Hero; */
  
  //defines hero array
  heroes: Hero[] = [];

  hero : Hero  = {
    id: 1,
    name: 'Windstorm'
  };

  //ActivatedRoute - holds information about the route("id" parameter)
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location:Location){}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getServiceHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }

}
