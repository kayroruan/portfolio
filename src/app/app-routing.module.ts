import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechsComponent } from './techs/techs.component';

const routes: Routes = [
  {
    path:'aboutme', component: AboutComponent
  },
  {
    path: '', redirectTo: 'aboutme', pathMatch: 'full'
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'techs', component: TechsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }