import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMeComponent } from './services-me.component';

describe('ServicesMeComponent', () => {
  let component: ServicesMeComponent;
  let fixture: ComponentFixture<ServicesMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
