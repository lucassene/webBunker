import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab-holder',
  templateUrl: 'tabholder.html'
})

export class TabHolderComponent {

  tabs: TabComponent[] = [];

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

 }

@Component({
  selector: 'tab',
  templateUrl: 'tab.html'
})

export class TabComponent {
  @Input() tabTitle: string;
  active = false;

    constructor(tabs:TabHolderComponent) {
    tabs.addTab(this);
  }
}
