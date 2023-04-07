import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
  constructor() {}

  ngOnInit(){

  }

  menuShow() {
    let menu = document.querySelector('.navbar')
    let over = document.querySelector('.overlay')

    menu.classList.add('open');
    over.classList.add('open');
  }

  outMenu() {
    let menu = document.querySelector('.navbar')
    let over = document.querySelector('.overlay')

    menu.classList.remove('open');
    over.classList.remove('open');

  }
}
