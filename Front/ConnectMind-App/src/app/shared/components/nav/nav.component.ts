import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isCollapsed:boolean = true;

  constructor() { }

  ngOnInit():void {
  }

  showMenu():boolean {
    const currentUrl = window.location.href;
    if (currentUrl.includes('/user/login') || currentUrl.includes('/user/registration')) {
      return false;
    }
    return true;
  }
}
