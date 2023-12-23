import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


// Aqui declaramos todos los componentes de Counter
@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule{}

