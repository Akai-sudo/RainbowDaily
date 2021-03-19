import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgrodjeComponent } from './ogrodje.component';

describe('OgrodjeComponent', () => {
  let component: OgrodjeComponent;
  let fixture: ComponentFixture<OgrodjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgrodjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OgrodjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
