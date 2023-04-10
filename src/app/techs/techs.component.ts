import { Component } from '@angular/core';
import { TechsService } from './techs.service';
import { Tech } from './techs';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.css']
})
export class TechsComponent {

  _techs: Tech[] = []

  constructor(private techService: TechsService) { }

  ngOnInit(): void {
    this._techs = this.techService.retriveAll();
  }
}
