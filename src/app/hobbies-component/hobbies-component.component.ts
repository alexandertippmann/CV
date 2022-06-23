import { Component, OnInit } from '@angular/core';
import {Hobbies, HOBBIESL, HOBBIESR } from '../hobbies';

@Component({
  selector: 'app-hobbies-component',
  templateUrl: './hobbies-component.component.html',
  styleUrls: ['./hobbies-component.component.css']
})
export class HobbiesComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedHobby?: Hobbies;
  hobbiesLeft = HOBBIESL;
  hobbiesRight = HOBBIESR;

  onSelect(hobby: Hobbies): void {
    this.selectedHobby = hobby;
  }

}
