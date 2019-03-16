import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionLevelComponent } from './accordion-level.component';

describe('AccordionLevelComponent', () => {
  let component: AccordionLevelComponent;
  let fixture: ComponentFixture<AccordionLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
