import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  retriveAll(): Project[] {
    return PROJECTS;
  }

  verificarAtributo(): boolean {
    return this.hasOwnProperty('repo');
  }
}

var PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Lótus Drink Bar',
    imageUrl: './assets/images/lotus.jpeg',
    link: 'https://www.lotusdrinksbar.com',
    app: 'Link do site',
    description: 'Projeto real de um website para um bar de drinks, com layout principal, cardápio e formulário para solicitação de orçamento. Feito em conjunto com designer que utilizou o Figma para criar os Mockups transformei em código utilizando o VSCode, com as linguagens HTML, CSS, JavaScript e JQuery.'
  },
  {
    id: 2,
    title: 'Course Manager',
    imageUrl: './assets/images/course-manager.jpeg',
    link: 'https://course-manager-app.vercel.app/courses',
    app: 'Link da Aplicação',
    repo: 'https://github.com/kayroruan/course-manager-app',
    description: 'Projeto totalmente feito com o Angular para conclusão do curso de introdução no site da DIO, onde foi extraído ao máximo os conceitos de componentização, rotas e event binding.',
  },
  {
    id: 3,
    title: 'Tela League of Legends',
    imageUrl: './assets/images/lol.jpeg',
    link: 'https://kayroruan.github.io/tela-de-login-lol/',
    app: 'Link da Aplicação',
    repo: 'https://github.com/kayroruan/tela-de-login-lol',
    description: 'Projeto proposto pelo Manual do Dev no YouTube para exercitar os conceitos de formulário, estilização e lógica de programação. O projeto conta apenas com HTML, CSS e JavaScript.',
  },
  {
    id: 4,
    title: 'React Calculator',
    imageUrl: './assets/images/calculator-react.jpeg',
    link: 'https://react-caculator.vercel.app',
    app: 'Link da Aplicação',
    repo: 'https://github.com/kayroruan/react-caculator',
    description: 'Projeto do curso de React da Cod3r Cursos Online. Consiste na aplicação de uma calculadora na página web, com design inspirado na calculadora do IOS.',
  }
]
