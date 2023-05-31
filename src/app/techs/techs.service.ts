import { Injectable } from '@angular/core';
import { Tech } from './techs';

@Injectable({
  providedIn: 'root'
})
export class TechsService {

  retriveAll(): Tech[] {
    return TECHS;
  }
}

var TECHS: Tech[] = [
  {
    imageUrl: './assets/images/javascript.svg',
    name: 'JAVASCRIPT',
  },
  {
    imageUrl: './assets/images/typescript.svg',
    name: 'TYPESCRIPT',
  },
  {
    imageUrl: './assets/images/html.svg',
    name: 'HTML',
  },
  {
    imageUrl: './assets/images/css.svg',
    name: 'CSS',
  },
  {
    imageUrl: './assets/images/angular.svg',
    name: 'ANGULAR',
  },
  {
    imageUrl: './assets/images/react.svg',
    name: 'REACTJS',
  },
  {
    imageUrl: './assets/images/mysql.svg',
    name: 'MYSQL',
  }
]
