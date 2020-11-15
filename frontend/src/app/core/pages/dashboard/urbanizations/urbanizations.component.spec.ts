import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanizationsComponent } from './urbanizations.component';

describe('UrbanizationsComponent', () => {
  let component: UrbanizationsComponent;
  let fixture: ComponentFixture<UrbanizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrbanizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
