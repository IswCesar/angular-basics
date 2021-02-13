import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Batman', 'Hulk', 'Venom'];
  public heroDeleted: string = '';

  public deleteHero(): void {
    this.heroDeleted = this.heroes.shift() || ''; 
  }
}
