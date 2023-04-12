import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechsComponent } from './techs/techs.component';
import { Erro404Component } from './core/erro404/erro404.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'aboutme', component: AboutmeComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'techs', component: TechsComponent
  },
  {
    path: '**', component: Erro404Component  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }