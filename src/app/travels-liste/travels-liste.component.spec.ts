import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsListeComponent } from './travels-liste.component';

describe('TravelsListeComponent', () => {
  let component: TravelsListeComponent;
  let fixture: ComponentFixture<TravelsListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelsListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
