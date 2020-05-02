import { Component, Renderer, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'section2';

  isFavorite = false;

  constructor(private renderer: Renderer2) {

  }

  onShowBoring(element: HTMLElement) {
    this.renderer.setStyle(element, 'display', 'block');
  }
}
