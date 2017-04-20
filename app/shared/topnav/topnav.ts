import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';

declare var $: any;

@Component({
    selector: 'top-nav',
    templateUrl: 'topnav.html',
})

export class TopNavComponent {

  @Input() pageTitle;


  rtl(): void {
    let body: any = $('body');
    body.toggleClass('rtl');
  }

  sidebarToggler(): void  {
    let sidebar: any = $('#sidebar');
    let mainContainer: any = $('.main-container');
    sidebar.toggleClass('sidebar-left-zero');
    mainContainer.toggleClass('main-container-ml-zero');
  }

  public changeTitle(title: string){
    console.log('called!');
    this.pageTitle = title;
  }

}
