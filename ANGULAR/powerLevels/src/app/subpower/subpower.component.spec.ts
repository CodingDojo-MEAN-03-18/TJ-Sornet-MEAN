import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpowerComponent } from './subpower.component';

describe('SubpowerComponent', () => {
  let component: SubpowerComponent;
  let fixture: ComponentFixture<SubpowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
