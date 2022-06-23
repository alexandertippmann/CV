import { Component, OnInit, Input} from '@angular/core';
import {
  AUTO_STYLE,
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';
import {Skills} from '../skills'

const DEFAULT_DURATION = 300;
@Component({
  selector: 'app-collapse-component',
  templateUrl: './collapse-component.component.html',
  styleUrls: ['./collapse-component.component.css'],
  animations: [
    trigger('collapseTrigger', [
      transition(':enter', [
        style({ height: '0', visibility: 'hidden', overflow: 'hidden'}),
        animate(DEFAULT_DURATION, style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      ])
    ])
  ]
})
export class CollapseComponentComponent implements OnInit {
  collapsed = true;
  @Input() skill?: Skills;
  action?: string;
  selectedRating = "";

  constructor() { }

  ngOnInit(): void {
    this.action = this.skill.action
  }

click(value:string){
  this.selectedRating = value
  this.skill.proficiency = Number(value);
  console.log(value)
}

}
