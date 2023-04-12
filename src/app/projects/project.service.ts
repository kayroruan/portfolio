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
    imageUrl: './assets/images/lotus.jpeg',
    link: 'https://www.lotusdrinksbar.com',
    type: 'site',
    description: 'Projeto real de um website para um bar de drinks, com layout principal, cardápio e formulário para solicitação de orçamento. Feito em conjunto com designer que utilizou o Figma para criar os Mockups transformei em código utilizando o VSCode, com as linguagens HTML, CSS, JavaScript e JQuery.'
  },
  {
    id: 1,
    title: 'Course Manager',
    imageUrl: './assets/images/course-manager.jpeg',
    link: 'https://github.com/kayroruan/pagina-angular-course-manager',
    type: 'repositório',
    description: 'Projeto totalmente feito com o Angular para conclusão do curso de introdução no site da DIO, onde foi extraído ao máximo os conceitos de componentização, rotas e event binding.',
  },
  {
    id: 1,
    title: 'Tela League of Legends',
    imageUrl: './assets/images/lol.jpeg',
    link: 'https://github.com/kayroruan/tela-de-login-lol',
    type: 'repositório',
    description: 'Projeto proposto pelo Manuel do Dev no YouTube para exercitar os conceitos de formulário, estilização e lógica de programação. O projeto conta apenas com HTML, CSS e JavaScript.',
  }
]
