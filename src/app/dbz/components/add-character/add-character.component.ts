import { Component, EventEmitter, Output } from '@angular/core';

// Libreria para crear id unicos
import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // Decorador para enviar datos de un componente hijo al padre
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0
  }

  viewCharacter(): void {

    if( this.character.name.length === 0 ) return;

    // Con esto emitimos la info de character para que lo reciba MainComponent
    this.onNewCharacter.emit( this.character );

    // Despues de enviar el formulario vaciamos los datos de los campos
    this.character = { id: uuid(), name: '', power: 0};

  }
}
