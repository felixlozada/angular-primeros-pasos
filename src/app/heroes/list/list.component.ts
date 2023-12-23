import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName: string[] = ['Spiderman', 'Batman', 'Ironman', 'Thor'];
  public deletedHero?: string;

  removedLastHero():void {

    this.deletedHero = this.heroesName.pop();

    console.log(this.deletedHero);

  }

}
