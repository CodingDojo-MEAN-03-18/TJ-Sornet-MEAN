import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DojomailComponentComponent } from './dojomail-component.component';

describe('DojomailComponentComponent', () => {
  let component: DojomailComponentComponent;
  let fixture: ComponentFixture<DojomailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DojomailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DojomailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
