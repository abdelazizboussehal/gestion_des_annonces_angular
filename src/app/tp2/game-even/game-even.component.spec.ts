import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEvenComponent } from './game-even.component';

describe('GameEvenComponent', () => {
  let component: GameEvenComponent;
  let fixture: ComponentFixture<GameEvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameEvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
