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

  open = document.querySelector('.open')

  menuShow() {
    let menu = document.querySelector('.navbar')
    let over = document.querySelector('.overlay')

    menu.classList.add('open');
    over.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
  }

  outMenu() {
    let menu = document.querySelector('.navbar')
    let over = document.querySelector('.overlay')

    menu.classList.remove('open');
    over.classList.remove('open');
    document.documentElement.style.overflow = 'auto';
  }
}
