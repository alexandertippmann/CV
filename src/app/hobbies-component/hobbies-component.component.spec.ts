import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesComponentComponent } from './hobbies-component.component';

describe('HobbiesComponentComponent', () => {
  let component: HobbiesComponentComponent;
  let fixture: ComponentFixture<HobbiesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
