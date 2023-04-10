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
    link: 'https://www.lotusdrinksbar.com',
    type: 'site'
  },
  {
    id: 1,
    title: 'Course Manager',
    description: 'Descrição do Projeto',
    imageUrl: './assets/images/perfil.JPEG',
    link: 'https://github.com/kayroruan/pagina-angular-course-manager',
    type: 'repositório'
  },
  {
    id: 1,
    title: 'Tela League of Legends',
    description: 'Descrição do Projeto',
    imageUrl: './assets/images/perfil.JPEG',
    link: 'https://github.com/kayroruan/tela-de-login-lol',
    type: 'repositório'
  }
]
