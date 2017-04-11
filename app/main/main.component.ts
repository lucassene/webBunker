import { Component } from '@angular/core';

@Component({
  selector: 'main-cmp',
  templateUrl: 'main.component.html'
})

export class MainComponent {

  pageTitle = 'The Bunker';

  changeTitleString(title: string) {
    this.pageTitle = title;
  }

 }
