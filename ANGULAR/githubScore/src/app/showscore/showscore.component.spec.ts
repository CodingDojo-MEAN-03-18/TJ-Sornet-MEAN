import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowscoreComponent } from './showscore.component';

describe('ShowscoreComponent', () => {
  let component: ShowscoreComponent;
  let fixture: ComponentFixture<ShowscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
