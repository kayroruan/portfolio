import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnChanges {

  @Input()
  progress: number = 0

  width: number

  ngOnChanges(){
    this.width = this.progress
  }
}
