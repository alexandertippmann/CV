import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseComponentComponent } from './collapse-component.component';

describe('CollapseComponentComponent', () => {
  let component: CollapseComponentComponent;
  let fixture: ComponentFixture<CollapseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
