import { Component, OnInit, Input} from '@angular/core';
import {
  AUTO_STYLE,
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';
import {Hobbies} from '../hobbies'

const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-hobbies-collapse-component',
  templateUrl: './hobbies-collapse-component.component.html',
  styleUrls: ['./hobbies-collapse-component.component.css'],
  animations: [
    trigger('collapseTrigger', [
      transition(':enter', [
        style({ height: '0', visibility: 'hidden', overflow: 'hidden'}),
        animate(DEFAULT_DURATION, style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      ])
    ])
  ]
})
export class HobbiesCollapseComponentComponent implements OnInit {
  collapsed = true;
  @Input() hobby?: Hobbies;
  action?: string;
  selectedRating = "";

  constructor() { }

  ngOnInit(): void {
    this.action = this.hobby.action
  }

}
