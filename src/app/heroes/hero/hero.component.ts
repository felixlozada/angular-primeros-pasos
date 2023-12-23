import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Spiderman';
  public age: number = 25;
  public power: string[] = ['trepar muros', 'lanzar telarañas'];
  public height: number = 185;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getDescription():string {
    return `${this.name} - ${this.power}`;
  }

  changeName():void {
    // let nameValue: string = this.name;

    // if(nameValue == 'Spiderman'){
      this.name = 'Ironman';

      // nameValue = 'Ironman';
    // }else{
    //   this.name = 'Spiderman';

    //   nameValue = 'Spiderman';
    // }
  }

  changeAge():void {
    this.age = 45;
  }

  reset():void {
    this.name = 'Spiderman';
    this.age = 25;
  }
}
