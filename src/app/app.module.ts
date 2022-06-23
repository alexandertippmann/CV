import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SkillsComponentComponent } from './skills-component/skills-component.component';
import { CollapseComponentComponent } from './collapse-component/collapse-component.component';
import { FormsModule } from '@angular/forms';
import { HobbiesComponentComponent } from './hobbies-component/hobbies-component.component';
import { HobbiesCollapseComponentComponent } from './hobbies-collapse-component/hobbies-collapse-component.component';
import { TetrisComponentComponent } from './tetris-component/tetris-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponentComponent,
    CollapseComponentComponent,
    HobbiesComponentComponent,
    HobbiesCollapseComponentComponent,
    TetrisComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
