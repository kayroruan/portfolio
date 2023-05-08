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
    name: 'JavaScript',
    progress: 80
  },
  {
    imageUrl: './assets/images/typescript.svg',
    name: 'TypeScript',
    progress: 60

  },
  {
    imageUrl: './assets/images/html.svg',
    name: 'HTML',
    progress: 100
  },
  {
    imageUrl: './assets/images/css.svg',
    name: 'CSS',
    progress: 90
  },
  {
    imageUrl: './assets/images/angular.svg',
    name: 'Angular',
    progress: 60
  },
  {
    imageUrl: './assets/images/react.svg',
    name: 'ReactJs',
    progress: 30
  },
  {
    imageUrl: './assets/images/mysql.svg',
    name: 'MySQL',
    progress: 30
  }
]
