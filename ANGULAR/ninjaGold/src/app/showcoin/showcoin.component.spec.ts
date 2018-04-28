import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcoinComponent } from './showcoin.component';

describe('ShowcoinComponent', () => {
  let component: ShowcoinComponent;
  let fixture: ComponentFixture<ShowcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
