import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoDanComponent } from './bao-dan.component';

describe('BaoDanComponent', () => {
  let component: BaoDanComponent;
  let fixture: ComponentFixture<BaoDanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoDanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoDanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
