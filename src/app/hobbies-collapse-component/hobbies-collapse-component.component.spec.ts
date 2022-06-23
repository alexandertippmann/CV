import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesCollapseComponentComponent } from './hobbies-collapse-component.component';

describe('HobbiesCollapseComponentComponent', () => {
  let component: HobbiesCollapseComponentComponent;
  let fixture: ComponentFixture<HobbiesCollapseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesCollapseComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesCollapseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
