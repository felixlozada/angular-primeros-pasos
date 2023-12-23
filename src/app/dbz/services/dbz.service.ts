import { Injectable } from '@angular/core';

// Libreria para crear id unicos
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 8800
  }];

  // Con este metodo recibimos datos de un componente hijo
  addCharacter( character: Character ): void {

    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: '',
    //   power: 0
    // }

    const newCharacter: Character = {...character};

    this.characters.push(newCharacter);
  }

  // Con este metodo borramos el personaje a traves del id emitido desde ListComponent
  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
