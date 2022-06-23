import { Component, OnInit } from '@angular/core';
import {Skills,SKILLSL,SKILLSR,LANGSL,LANGSR} from '../skills';


@Component({
  selector: 'app-skills-component',
  templateUrl: './skills-component.component.html',
  styleUrls: ['./skills-component.component.css']
})
export class SkillsComponentComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  selectedSkill?: Skills;

  skillsLeft = SKILLSL;
  skillsRight = SKILLSR;
  languagesLeft = LANGSL;
  languagesRight = LANGSR;

  range(number){
  return new Array(number)
  }


  onSelect(skill: Skills): void {
    this.selectedSkill = skill;
  }

}
