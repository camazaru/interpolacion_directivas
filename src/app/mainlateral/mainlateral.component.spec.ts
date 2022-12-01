import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlateralComponent } from './mainlateral.component';

describe('MainlateralComponent', () => {
  let component: MainlateralComponent;
  let fixture: ComponentFixture<MainlateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainlateralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainlateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
