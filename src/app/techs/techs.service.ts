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
    name: 'JavaScript'
  },
  {
    imageUrl: './assets/images/typescript.svg',
    name: 'TypeScript'
  },
  {
    imageUrl: './assets/images/html.svg',
    name: 'CSS'
  },
  {
    imageUrl: './assets/images/css.svg',
    name: 'HTML'
  },
  {
    imageUrl: './assets/images/angular.svg',
    name: 'Angular'
  },
  {
    imageUrl: './assets/images/react.svg',
    name: 'ReactJs'
  }
]
