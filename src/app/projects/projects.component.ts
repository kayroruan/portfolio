import { Component } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {

  _projects: Project[] = []

  constructor(private projectService: ProjectService){}

  ngOnInit():void {
    this._projects = this.projectService.retriveAll();
  }
}
