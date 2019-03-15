// import { HEROES } from '../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];

    constructor(private heroService: HeroService) { }
    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.addHero({ name } as Hero)
            .subscribe(hero => {
                this.heroes.push(hero);
            });
    }

    delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero).subscribe();
    }

    /*
    heroes = HEROES; //import한 배열객체
    selectedHero: Hero; //클릭할 인자값       
    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }    
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    */
}
