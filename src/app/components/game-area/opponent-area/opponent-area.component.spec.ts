import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentAreaComponent } from './opponent-area.component';

describe('OpponentAreaComponent', () => {
  let component: OpponentAreaComponent;
  let fixture: ComponentFixture<OpponentAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
