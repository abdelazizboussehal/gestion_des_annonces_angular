import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOddComponent } from './game-odd.component';

describe('GameOddComponent', () => {
  let component: GameOddComponent;
  let fixture: ComponentFixture<GameOddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameOddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
