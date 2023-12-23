import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Decorador que permite exponer propiedades de la clase
  @Input()
  public charactersList: Character[] = [];

  // Decorador para enviar datos de un componente hijo al padre
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  // Funcion para emitir el id del personaje y mandarlo a MainComponent
  onDeleteCharacter( id?: string ): void {

    // Con esto emitimos el index(i) de character para que lo reciba MainComponent
    this.onDeleteId.emit( id );

  }

}
