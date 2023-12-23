import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importacion de modulos
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

// Importacion de componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({

  // Aqui declaramos los componentes
  declarations: [
    AppComponent
  ],

  // E importamos los modulos
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
