import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  retriveAll(): Project[] {
    return PROJECTS;
  }

}

var PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Lótus Drink Bar',
    description: 'Descrição do Projeto',
    imageUrl: './assets/images/perfil.JPEG',
    link: 'https://www.lotusdrinksbar.com'
  },
  {
    id: 1,
    title: 'Course Manager',
    description: 'Descrição do Projeto',
    imageUrl: './assets/images/perfil.JPEG',
    link: 'link'
  },
  {
    id: 1,
    title: 'Tela League of Legends',
    description: 'Descrição do Projeto',
    imageUrl: './assets/images/perfil.JPEG',
    link: 'link'
  }
]
