import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-loading-ng',
  templateUrl: './loading-ng.component.html',
  styleUrls: ['./loading-ng.component.css'],
  animations: [
    trigger('fillAnimation', [
      state('start', style({
        transform: 'rotate(0deg)'
      })),
      state('end', style({
        transform: 'rotate(180deg)' // Alterado para 360 graus
      })),
      transition('start => end', animate('2s ease-in-out'))
    ])
  ]
})
export class LoadingNgComponent {

  fillState = 'start'; // Defina o estado inicial da animação

  constructor() { }

  ngOnInit() {
    // Defina um timeout para alternar para o estado final após um período de tempo
    setTimeout(() => {
      this.fillState = 'end';
    }, 1000);
  }

}
