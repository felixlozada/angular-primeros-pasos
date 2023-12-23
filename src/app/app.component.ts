import { Component } from '@angular/core';

// Decorador
@Component({
  selector: 'app-root', // Selector para llamar algun template html del decorador <app-root></app-root>
  templateUrl: './app.component.html', // Template del decorador
  styleUrl: './app.component.css' // css del template
})
export class AppComponent {

  // Propiedad que podemos mostrar en el frontend {{ title }}
  public title: string = 'Mi primera app de Angular';

}
