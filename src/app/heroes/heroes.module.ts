import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    // Declarate all components created
    HeroComponent,
    ListComponent
  ],
  exports: [
    // Which component is available outside
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})

export class HeroesModule {
}