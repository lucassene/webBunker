import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.html'
})

export class SidebarComponent {
  
  @Output()
  changeTitleString = new EventEmitter<string>();
  
  isActive = false;
  showMenu: string = '';
  eventCalled() {
    this.isActive = !this.isActive;
  }
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  
  changeTitle(title: string) {
    this.changeTitleString.emit(title);
  }
  
}
