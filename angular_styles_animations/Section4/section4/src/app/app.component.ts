import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { clickedStateTrigger, numberEnteredStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    clickedStateTrigger,
    numberEnteredStateTrigger
  ]
})
export class AppComponent {
  clickInfo = 'default';
  paragraphClick = 'default';
  numberEntered = 0;

  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }

  test(lol: any) {
    console.log(lol);
  }
}


