import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigieren } from './navigieren';

describe('Navigieren', () => {
  let component: Navigieren;
  let fixture: ComponentFixture<Navigieren>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navigieren]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navigieren);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
