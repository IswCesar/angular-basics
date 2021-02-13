import { Component } from '@angular/core'

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola mundo {{ title }}</h1>
    <h3>The base is <strong>{{ base }}</strong></h3>
    <button (click)="accumulate(base)"> + {{ base }}</button>
    <span>{{ number }}</span>
    <button (click)="accumulate(-base)"> - {{ base }}</button>
  `
})

export class CounterComponent {
  public title : string = 'Counter app';
  public number: number = 10;
  public base  : number = 5;
  
  accumulate(value: number) {
    this.number += value;
  }
}