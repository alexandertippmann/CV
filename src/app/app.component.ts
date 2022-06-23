import { Component } from '@angular/core';
import {EDUCATION,CAREERS} from './experiences';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Alexander Tippmann';
  educations = EDUCATION;
  careers = CAREERS;


range(number){
return new Array(number)
}

}
