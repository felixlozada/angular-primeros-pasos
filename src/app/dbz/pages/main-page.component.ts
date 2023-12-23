import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ){}

  // Con este get sacamos del servicio privado el array characters
  get characters(): Character[] {

    // Retornamos los characters del servicio privado dbzService
    return [...this.dbzService.characters];

  }

  // Con este metodo obtenemos la funcion deleteCharacterById del servicio privado dbzService
  onDeleteCharacter( id: string ): void{

    this.dbzService.deleteCharacterById( id );

  }

  // Con este metodo obtenemos la funcion addCharacter del servicio privado dbzService
  onNewCharacter( character: Character ): void{

    this.dbzService.addCharacter( character );

  }

}
