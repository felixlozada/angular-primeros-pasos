import { Component } from "@angular/core";


@Component({
  selector: 'app-counter', // Selector para llamar algun template html del decorador <app-counter></app-counter>

  // En este caso el contenido del template lo colocamos directo
  template: `
    <p>Counter: {{ counter }}</p> <!-- Llamamos propiedad de la clase CounterComponent-->

    <button (click)="changeCounter(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="changeCounter(-1)">-1</button>
  `
})
export class CounterComponent{
  public counter: number = 10;

  changeCounter( value: number ): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
