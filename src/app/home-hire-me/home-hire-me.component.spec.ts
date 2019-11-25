import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHireMeComponent } from './home-hire-me.component';

describe('HomeHireMeComponent', () => {
  let component: HomeHireMeComponent;
  let fixture: ComponentFixture<HomeHireMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHireMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHireMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
